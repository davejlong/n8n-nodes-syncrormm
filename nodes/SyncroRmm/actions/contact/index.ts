import type { INodeProperties } from 'n8n-workflow';

import * as create from './create';
import * as get from './get';
import * as getAll from './getAll';

export { get, getAll, create };

export const descriptions = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create new contact',
				action: 'Create a contact',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve contact',
				action: 'Get a contact',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many contacts',
				action: 'Get many contacts',
			},
		],
		default: 'getAll',
	},
	...create.description,
	...get.description,
	...getAll.description,
] as INodeProperties[];
