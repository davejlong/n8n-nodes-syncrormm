import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { syncroGetRequest } from '../../../transport';

export async function getTicket(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('ticketId', index) as string;
	const endpoint = `tickets/${id}`;

	return syncroGetRequest.call(this, endpoint, "ticket");
}
