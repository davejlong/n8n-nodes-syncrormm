import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { syncroGetRequest } from "../../../transport";

export async function getCustomer(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('customerId', index) as string;
	const endpoint = `customers/${id}`;

	return syncroGetRequest.call(this, endpoint, "customer");
}
