import type { IExecuteFunctions, INodeExecutionData, JsonObject } from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

import type { SyncroRmm } from './interfaces';

import * as customer from './customer';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<SyncroRmm>('resource', i);
		let operation = this.getNodeParameter('operation', i);
		let responseData: INodeExecutionData[] = [];

		const syncroRmm = { resource, operation } as SyncroRmm;

		try {
			if (resource == 'customer') {
				responseData = await customer[syncroRmm.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(responseData, {
				itemData: { item: i },
			});

			operationResult.push(...executionData);
		} catch (err) {
			if(this.continueOnFail()) {
				const executionErrorData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray({ error: err.message }),
					{ itemData: { item: i }},
				);
				operationResult.push(...executionErrorData);
			} else {
				throw new NodeApiError(this.getNode(), err as JsonObject, { itemIndex: i });
			}
		}
	}

	return [operationResult];
}
