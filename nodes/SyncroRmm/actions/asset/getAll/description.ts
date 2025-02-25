import type { AssetProperties } from "../../interfaces";

export const assetGetAllDescription: AssetProperties = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['asset'],
                operation: ['getAll'],
            },
        },
        default: false,
        noDataExpression: true,
        description: 'Whether to return all results or only up to a given limit',
    },
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		default: 50,
		description: 'Max number of results to return',
	},
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