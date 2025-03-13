import type { AlertProperties } from '../../interfaces';

export const createAlert: AlertProperties = [
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
		displayName: 'Check Type',
		name: 'checkType',
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
