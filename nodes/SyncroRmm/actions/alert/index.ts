import type { INodeProperties } from 'n8n-workflow';

import * as create from './create';
import * as get from './get';
import * as getAll from './getAll';
import { alertDescription } from './description';

export { create, get, getAll };
export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['alert'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create new RMM Alert',
				action: 'Create an RMM alert',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve RMM Alert',
				action: 'Get an RMM alert',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many RMM Alerts',
				action: 'Get many RMM alerts',
			},
		],
		default: 'getAll',
	},
];

export const descriptions = [
	...alertDescription,
	...getAll.description,
] as INodeProperties[];
