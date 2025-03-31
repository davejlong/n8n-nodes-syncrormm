import type { AssetProperties } from "../../interfaces";

export const updateAsset: AssetProperties = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['update'],
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
				resource: ['asset'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'number',
				default: undefined,
			},
			{
				displayName: 'Asset Type Name or ID',
				name: 'assetTypeId',
				type: 'options',
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
				default: undefined,
			},
			{
				displayName: 'Serial Number',
				name: 'assetSerial',
				type: 'string',
				default: undefined,
			}
		],
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
				operation: ['update'],
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
						name: 'fieldId',
						type: 'options',
						typeOptions: {
							loadOptionsDependsOn: ['assetTypeId'],
							loadOptionsMethod: 'getAssetFieldOptions',
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
]
