import { INodeProperties } from "n8n-workflow";
import { LoadOptions } from "../../utilities/LoadOptions";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'asset_id',
			},
		},
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'options',
		typeOptions: {
			loadOptions: LoadOptions.GetCustomers,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['alerts'],
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
		displayName: 'Check Type',
		name: 'checkType',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'formatted_output',
			},
		},
	},
	{
		displayName: 'Resolved',
		name: 'resolved',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'resolved',
			},
		},
	},
];
