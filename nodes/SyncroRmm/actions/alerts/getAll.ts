import { INodeProperties } from "n8n-workflow";

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: 'active',
		options: [
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'Active',
				value: 'active',
			},
			{
				name: 'Resolved',
				value: 'resolved',
			},
		],
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['getAll'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'status',
			},
		},
	},
];
