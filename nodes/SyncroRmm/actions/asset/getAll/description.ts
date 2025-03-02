import type { AssetProperties } from "../../interfaces";

export const assetGetAllDescription: AssetProperties = [
	{
		displayName: 'Asset Search ID',
		name: 'assetSearchId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'ID of Saved Asset Search. Voids all other filters.'
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Search Query',
				name: 'query',
				type: 'string',
				default: '',
				placeholder: 'Server02',
				description: 'Search query, it can be anything related to asset data like user etc',
			},
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'number',
				default: undefined,
				description: 'Filter assets for a specific customer',
			},
			{
				displayName: 'Asset Type ID',
				name: 'assetTypeId',
				type: 'number',
				default: undefined,
				description: 'Filter assets for a specific asset type',
			},
			{
				displayName: 'SNMP Enabled',
				name: 'snmpEnabled',
				type: 'boolean',
				default: false,
				description: 'Whether to get assets where SNMP is enabled or not',
			}
		]
	},
];
