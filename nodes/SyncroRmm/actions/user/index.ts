import { INodeProperties } from "n8n-workflow";

import * as get from './get';
import * as getAll from './getAll';

export { get, getAll };

export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['user'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve user',
				action: 'Get a user',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many users',
				action: 'Get many users',
			},
		],
		default: 'getAll',
	},
];

export const descriptions: INodeProperties[] = [
	...getAll.description,
	...get.description,
]
