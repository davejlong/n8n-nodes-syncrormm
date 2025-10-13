import { INodeProperties } from "n8n-workflow";
import * as create from './create';

export { create };

export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['timer_entry'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a timer entry for a ticket',
				action: 'Create a timer entry',
			},
		],
		default: 'create'
	},
];

export const descriptions: INodeProperties[] = [
	...create.description,
]
