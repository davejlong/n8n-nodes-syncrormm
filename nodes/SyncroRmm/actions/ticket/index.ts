import type { INodeProperties } from 'n8n-workflow';

import * as create from './create';
import * as get from './get';
import * as getAll from './getAll';

export { create, get, getAll };

export const descriptions = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create new ticket',
				action: 'Create a ticket',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve ticket',
				action: 'Get a ticket',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many tickets',
				action: 'Get many tickets',
			},
		],
		default: 'getAll',
	},
	...create.description,
	...getAll.description,
	...get.description,
] as INodeProperties[];
