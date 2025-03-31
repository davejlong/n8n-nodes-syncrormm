import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function createAsset(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customerId = this.getNodeParameter('customerId', index) as IDataObject;
	const assetTypeId = this.getNodeParameter('assetTypeId', index) as IDataObject;
	const name = this.getNodeParameter('name', index) as IDataObject;
	const assetSerial = this.getNodeParameter('assetSerial', index) as IDataObject;
	const { customField } = this.getNodeParameter('customFields', index) as { customField: {fieldId: string, value: string}[] };

	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = '/customer_assets';

	let properties = {} as IDataObject;
	if (customField) {
		customField.forEach(field => {
			properties[field.fieldId] = field.value;
		});
	}

	let body = {
		asset_serial: assetSerial,
		asset_type_id: assetTypeId,
		customer_id: customerId,
		name,
		properties,
	} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.asset as IDataObject);
}
