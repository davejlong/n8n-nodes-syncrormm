import type { AssetProperties } from "../../interfaces";

export const createAsset: AssetProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Asset Type Name or ID',
		name: 'assetTypeId',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getAssetTypeOptions',
		},
		default: '',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
	},
	{
		displayName: 'Asset Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Serial Number',
		name: 'assetSerial',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add Custom Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		description: 'Set custom field values',
		default: [],
		options: [
			{
				displayName: 'Custom Field',
				name: 'customField',
				values: [
					{
						displayName: 'Field Name or ID',
						name: 'name',
						type: 'options',
						typeOptions: {
							loadOptionsDependsOn: ['assetTypeId'],
							loadOptionsMethod: 'getAssetCustomFields',
						},
						default: '',
						description: 'Custom field to set a value for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value to set on custom field',
					},
				],
			},
		],
	},
];
