import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function addAsset(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customerId = this.getNodeParameter('customerId', index) as IDataObject;
	const assetTypeId = this.getNodeParameter('assetTypeId', index) as IDataObject;
	const assetName = this.getNodeParameter('assetName', index) as IDataObject;
	const assetSerial = this.getNodeParameter('assetSerial', index) as IDataObject;

	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'rmm_alerts';
	let body = {
		customer_id: customerId,
		asset_type_id: assetTypeId,
		name: assetName,
		asset_serial: assetSerial,
	} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.asset as IDataObject);
}
