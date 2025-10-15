import { INodeProperties } from "n8n-workflow"
export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'string',
				default: '',
				description: 'Filter by customer ID',
				routing: {
					send: {
						type: 'query',
						property: 'customer_id',
					},
				},
			},
			{
				displayName: 'Asset Type ID',
				name: 'assetTypeId',
				type: 'string',
				default: '',
				description: 'Filter by asset type ID',
				routing: {
					send: {
						type: 'query',
						property: 'asset_type_id',
					},
				},
			},
			{
				displayName: 'SNMP Enabled',
				name: 'snmpEnabled',
				type: 'boolean',
				default: false,
				description: 'Whether or not to get assets with SNMP enabled',
				routing: {
					send: {
						type: 'query',
						property: 'snmp_enabled',
					},
				},
			},
			{
				displayName: 'Search Query',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Filter by search query',
				routing: {
					send: {
						type: 'query',
						property: 'query',
					},
				},
			},
		],
	}
];
