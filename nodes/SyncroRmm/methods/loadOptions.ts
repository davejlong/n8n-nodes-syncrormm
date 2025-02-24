import { ILoadOptionsFunctions, INodePropertyOptions, NodeOperationError } from "n8n-workflow";
import { apiRequest } from "../transport";

export async function getTicketStatusOptions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const endpoint = 'tickets/settings';
	const responseData = await apiRequest.call(this, 'GET', endpoint, {});

	if (responseData == undefined) {
		throw new NodeOperationError(this.getNode(), 'No data returned');
	}

	const returnData: INodePropertyOptions[] = [];
	for (const data of responseData.ticket_status_list) {
		returnData.push({
			name: data as string,
			value: data as string
		});
	}

	return returnData;
}
