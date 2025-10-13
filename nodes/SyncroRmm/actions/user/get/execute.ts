import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { syncroGetRequest } from "../../../transport";

export async function getUser(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('userId', index) as string;
	const endpoint = `users/${id}`;

	return syncroGetRequest.call(this, endpoint, 'user');
}
