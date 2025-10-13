import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function createTimerEntry(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as IDataObject;
	const userId = this.getNodeParameter('userId', index) as IDataObject;
	const startAt = this.getNodeParameter('startAt', index) as IDataObject;
	const endAt = this.getNodeParameter('endAt', index) as IDataObject;
	const notes = this.getNodeParameter('notes', index) as IDataObject;

	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `/tickets/${ticketId}/timer_entry`;
	let body:IDataObject = {
		user_id: userId,
		notes: notes,
		start_at: startAt,
		end_at: endAt,
	};

	this.logger.debug("SYNCRORMM==========================");
	this.logger.debug(JSON.stringify(body));
	this.logger.debug("SYNCRORMM==========================");

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject);
}
