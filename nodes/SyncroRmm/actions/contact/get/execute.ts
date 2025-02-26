import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { syncroGetRequest } from '../../../transport';

export async function getContact(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('contactId', index) as string;
	const endpoint = `contacts/${id}`;

	return syncroGetRequest.call(this, endpoint);
}
