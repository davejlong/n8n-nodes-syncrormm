import { IDataObject, IExecuteFunctions, INodeExecutionData, JsonObject, NodeApiError } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function updateTicket(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('ticketId', index) as IDataObject;
	const {
		assetId,
		contactId,
		customerId,
		issueType,
		status,
		subject,
	} = this.getNodeParameter('additionalFields', index);

	const qs = {} as IDataObject;
	const requestMethod = 'PUT';
	const endpoint = `tickets/${id}`;
	let body = {} as IDataObject;

	body = {
		asset_ids: [ assetId ],
		contact_id: contactId,
		customer_id: customerId,
		issue_type: issueType,
		status,
		subject,
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	if (!responseData.ticket) {
		throw new NodeApiError(this.getNode(), responseData as JsonObject);
	}
	return this.helpers.returnJsonArray(responseData.ticket as IDataObject);

}
