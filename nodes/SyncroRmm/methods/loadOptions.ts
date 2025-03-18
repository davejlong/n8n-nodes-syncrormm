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

export async function getTicketTypeOptions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequest.call(this, 'GET', 'settings', {});

	if (responseData == undefined) {
		throw new NodeOperationError(this.getNode(), 'No data returned');
	}

	const returnData: INodePropertyOptions[] = [];
	for (const data of responseData.ticket.problem_types) {
		returnData.push({
			name: data as string,
			value: data as string,
		});
	}

	return returnData;
}

export async function getCustomerCustomFields(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequest.call(this, 'GET', 'settings', {});

	if (responseData == undefined) {
		throw new NodeOperationError(this.getNode(), 'No data returned');
	}

	const returnData: INodePropertyOptions[] = [];
	for(const data of responseData.customers.customer_fields) {
		returnData.push({
			name: data.name as string,
			value: data.name as string,
		});
	}

	return returnData;
}

export async function getAssetTypeOptions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequest.call(this, 'GET', 'settings', {});

	if (responseData == undefined) {
		throw new NodeOperationError(this.getNode(), 'No data returned');
	}

	const returnData: INodePropertyOptions[] = [];
	for(const data of responseData.assets.asset_types) {
		returnData.push({
			name: data.name as string,
			value: data.id as number,
		});
	}

	return returnData;
}
