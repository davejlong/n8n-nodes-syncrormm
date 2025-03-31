import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function updateAsset(
	this: IExecuteFunctions,
	index: number
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('assetId', index) as IDataObject;
	const {
		assetSerial,
		assetTypeId,
		customerId,
		name,
	} = this.getNodeParameter('additionalFields', index);
	const { customField } = this.getNodeParameter('customFields', index) as { customField: {fieldId: string, value: string}[] };

	const qs = {} as IDataObject;
	const requestMethod = 'PUT';
	const endpoint = `customer_assets/${id}`;
	let body = {} as IDataObject;

	let properties = {} as IDataObject;
	if (customField) {
		customField.forEach(field => {
			properties[field.fieldId] = field.value;
		});
	}

	body = {
		asset_serial: assetSerial,
		asset_type_id: assetTypeId,
		customer_id: customerId,
		name,
		properties,
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.asset as IDataObject);
}
