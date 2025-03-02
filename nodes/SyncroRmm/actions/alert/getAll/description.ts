import type { AlertProperties } from '../../interfaces';

export const alertGetAllDescription: AlertProperties = [
	// {
	// 	displayName: 'Return All',
	// 	name: 'returnAll',
	// 	type: 'boolean',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['alert'],
	// 			operation: ['getAll'],
	// 		},
	// 	},
	// 	default: false,
	// 	noDataExpression: true,
	// 	description: 'Whether to return all results or only up to a given limit',
	// },
	// {
	// 	displayName: 'Limit',
	// 	name: 'limit',
	// 	type: 'number',
	// 	typeOptions: {
	// 		minValue: 1,
	// 	},
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['alert'],
	// 			operation: ['getAll'],
	// 			returnAll: [false],
	// 		},
	// 	},
	// 	default: 50,
	// 	description: 'Max number of results to return',
	// },
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Resolved',
						value: 'resolved',
					},
				],
				default: 'all',
			},
		],
	},
];
