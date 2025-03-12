import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { syncroGetRequest } from "../../../transport";

export async function getAsset(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('assetId', index) as string;
	const endpoint = `customer_assets/${id}`;

	return syncroGetRequest.call(this, endpoint, 'asset');
}
