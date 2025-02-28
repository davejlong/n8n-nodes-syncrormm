import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getAll from './getAll';
import * as create from './create';
import * as update from './update';
import { customerFields } from './customerFields';

export { get, getAll, create, update };

export const descriptions = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new customer',
				action: 'Create a customer',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve customer',
				action: 'Get a customer',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many customers',
				action: 'Get many customers',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update customer',
				action: 'Update a customer',
			}
		],
		default: 'getAll'
	},
	...customerFields,
	// ...get.description,
	...getAll.description,
	// ...create.description,
	// ...update.description,
] as INodeProperties[];
