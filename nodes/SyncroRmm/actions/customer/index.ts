import { INodeProperties } from 'n8n-workflow';
import * as get from './get';
import * as getAll from './getAll';

export { get, getAll };

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
		]
	},
	...get.description,
	...getAll.description,
] as INodeProperties[];
