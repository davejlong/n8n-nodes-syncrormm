import { IExecuteSingleFunctions, INodeExecutionData, IN8nHttpFullResponse, IHttpRequestOptions, IDataObject, IExecutePaginationFunctions, DeclarativeRestApiSettings, IPostReceiveRootProperty, IPostReceiveBase } from "n8n-workflow";

export async function SyncroPagination(
	this: IExecutePaginationFunctions,
	requestData: DeclarativeRestApiSettings.ResultOptions
): Promise<INodeExecutionData[]> {
	this.logger.debug('[SYNCRO] Starting pagination function');
	const returnData: INodeExecutionData[] = [];

	// Create a new RequestData object without the root property
	const requestOptions = requestData.options as IHttpRequestOptions;
	if (requestOptions.qs === undefined) {
		requestOptions.qs = { page: 1};
	}

	// Determine the root property from the postReceive actions
	const postReceiveActions = requestData.postReceive[0].actions as IPostReceiveBase[];
	const rootPropertyAction = postReceiveActions.find((action) => action.type === 'rootProperty') as IPostReceiveRootProperty;
	let rootProperty: string = 'data';
	if (rootPropertyAction) {
		rootProperty = rootPropertyAction.properties.property;
	}

	this.logger.debug(`[SYNCRO] Using root property: ${rootProperty}`);
	let responseData;
	do {
		this.logger.debug('[SYNCRO] Making paginated request with options:');
		this.logger.debug(JSON.stringify(requestOptions, null, 2));
		responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'syncroRmmApi', requestOptions);
		responseData[rootProperty].forEach((item: IDataObject) => {
			returnData.push({ json: item });
		});
		requestOptions.qs.page = (requestOptions.qs.page as number || 1) + 1;
	} while(responseData.meta && responseData.meta.page < responseData.meta.total_pages);

	return returnData;
}

export async function UsersPostReceiveAction(
	this: IExecuteSingleFunctions, items: INodeExecutionData[], response: IN8nHttpFullResponse
): Promise<INodeExecutionData[]> {
	const newItems: INodeExecutionData[] = [];

	items.forEach((item, index) => {
		const json = item.json;
		if (json && json.users) {
			(json.users as [number, string][]).forEach(([id, name]) => {
				newItems.push({json: { id, name }})
			});
		}
	});

	return newItems;
}

export async function BuildCustomFieldsObject(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
	const customFields = this.getNodeParameter('customFields', 0) as IDataObject;
	let properties = {} as IDataObject;
	if (customFields.customField)	{
		const customField = customFields.customField as IDataObject[];
		customField.forEach((field: IDataObject) => {
			const fieldId = field.fieldId as string;
			const value = field.value;
			properties[fieldId] = value;
		});
	}

	requestOptions.body.properties = properties;
	return requestOptions;
}
