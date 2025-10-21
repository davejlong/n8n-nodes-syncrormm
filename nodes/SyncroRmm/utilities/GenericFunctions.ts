import { IExecuteSingleFunctions, INodeExecutionData, IN8nHttpFullResponse, IHttpRequestOptions, IDataObject } from "n8n-workflow";

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
