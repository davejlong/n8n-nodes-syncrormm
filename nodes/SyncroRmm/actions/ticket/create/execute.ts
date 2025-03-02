import { type IExecuteFunctions, type IDataObject, type INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createTicket(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customerId = this.getNodeParameter('customerId', index) as IDataObject;
	const subject = this.getNodeParameter('subject', index) as IDataObject;
	const {
		assetId,
		comment,
		contactId,
		issueType,
		status,
	} = this.getNodeParameter('additionalFields', index);

	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'tickets';
	let body = {} as IDataObject;

	body = {
		asset_ids: [ assetId ],
		contact_id: contactId,
		customer_id: customerId,
		problem_type: issueType,
		status,
		subject,
	};

	if (comment) {
		body.comments_attributes = [
			{
				subject: 'initial comment',
				body: comment,
			},
		]
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.ticket as IDataObject[]);
}
