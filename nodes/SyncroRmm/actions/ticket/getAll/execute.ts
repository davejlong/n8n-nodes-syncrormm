import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index);

	let qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = 'tickets';
	const body = {} as IDataObject;

	if (filters) {
		qs = filters;
	}
	if (qs.contactId) { qs.contact_id = qs.contactId; }
	if (qs.customerId) { qs.customer_id = qs.customerId; }
	if (qs.ticketSearchId) { qs.ticket_search_id = qs.ticketSearchId; }

	let responseData;
	if (returnAll) {
		responseData = await apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	} else {
		qs.per_page = this.getNodeParameter('limit', index);
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData.tickets as IDataObject[]);
	}
}
