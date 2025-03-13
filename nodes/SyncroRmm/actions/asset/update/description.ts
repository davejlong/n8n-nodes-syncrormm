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
]
