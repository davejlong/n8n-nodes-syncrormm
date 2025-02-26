import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function getAsset(
	this: IExecuteFunctions,
	index: number
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('assetId', index) as string;

	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = `customer_assets/${id}`;
	const body = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.asset as IDataObject[]);
}
