import type { AlertProperties } from '../interfaces';

export const alertDescription: AlertProperties = [
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Get specific RMM alert by ID',
	},
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Resolved',
				name: 'resolved',
				type: 'boolean',
				default: false,
			},
		],
	},
];
