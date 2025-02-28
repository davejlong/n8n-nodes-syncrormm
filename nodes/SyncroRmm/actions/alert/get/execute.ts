import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { syncroGetRequest } from '../../../transport';

export async function getAlert(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('alertId', index) as string;
	const endpoint = `rmm_alerts/${id}`;

	return syncroGetRequest.call(this, endpoint, "rmm_alert");
}
