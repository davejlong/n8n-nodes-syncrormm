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

interface AssetField {
	name: string;
	id: number;
	field_type: string;
	asset_type_id: number;
	position?: number;
	required: boolean;
}
export async function getAssetFieldOptions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequest.call(this, 'GET', 'settings', {});
	const assetTypeId = this.getNodeParameter('assetTypeId', null);

	if (responseData == undefined) {
		throw new NodeOperationError(this.getNode(), 'No data returned');
	}

	let properties: string[] = [];
	const returnData = responseData.assets.asset_type_fields.reduce((fields:INodePropertyOptions[], field:AssetField) => {
		if ((field.asset_type_id == assetTypeId || assetTypeId == null) && properties.indexOf(field.name) < 0) {
			properties.push(field.name)
			fields.push({
				name: field.name,
				value: field.name,
			});
		}
		return fields;
	}, []);

	return returnData;
}
