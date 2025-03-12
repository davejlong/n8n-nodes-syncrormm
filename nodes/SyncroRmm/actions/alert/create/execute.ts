import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createAlert(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customerId = this.getNodeParameter('customerId', index) as IDataObject;
	const assetId = this.getNodeParameter('assetId', index) as IDataObject;
	const checkType = this.getNodeParameter('checkType', index) as IDataObject;
	const description = this.getNodeParameter('description', index);
	const additionalFields = this.getNodeParameter('additionalFields', index);

	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'rmm_alerts';
	let body = {} as IDataObject;

	if (additionalFields) {
		body = additionalFields;
	}

	body.customer_id = customerId;
	body.asset_id = assetId;
	body.description = checkType;
	body.formatted_output = description;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.alert as IDataObject);
}
