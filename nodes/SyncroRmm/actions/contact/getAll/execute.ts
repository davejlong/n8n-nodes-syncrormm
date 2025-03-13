import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function getContacts(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index);

	let qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = 'contacts';
	const body = {} as IDataObject;

	if (filters) {
		qs = filters;
		if (qs.customerId) { qs.customer_id = qs.customerId; }
	}

	let responseData;
	if (returnAll) {
		responseData = await apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	} else {
		qs.per_page = this.getNodeParameter('limit', index);
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData.contacts as IDataObject[]);
	}
}
