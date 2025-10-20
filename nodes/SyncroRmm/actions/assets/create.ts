import { INodeProperties } from "n8n-workflow";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'Laptop',
		description: 'Name of the asset',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'number',
		required: true,
		default: '',
		placeholder: '123',
		description: 'ID of the customer the asset belongs to',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'customer_id',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Asset Serial',
				name: 'assetSerial',
				type: 'string',
				default: '',
				description: 'Serial number of the asset',
				routing: {
					send: {
						type: 'body',
						property: 'asset_serial',
					},
				},
			},
		],
	},
];
