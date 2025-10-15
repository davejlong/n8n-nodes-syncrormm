import { INodeProperties } from "n8n-workflow";

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Business Name',
				name: 'business_name',
				type: 'string',
				default: '',
				description: 'Filter by business name',
				routing: {
					send: {
						type: 'query',
						property: 'business_name',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'Filter by first name',
				routing: {
					send: {
						type: 'query',
						property: 'firstname',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Filter by last name',
				routing: {
					send: {
						type: 'query',
						property: 'lastname',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'Filter by email',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'query',
						property: 'email',
					},
				},
			},
			{
				displayName: 'Search Query',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Text to search for within customer records',
				routing: {
					send: {
						type: 'query',
						property: 'query',
					}
				}
			},
			{
				displayName: 'Include Disabled',
				name: 'includeDisabled',
				type: 'boolean',
				default: false,
				description: 'Whether to include disabled customers in the results',
				routing: {
					send: {
						type: 'query',
						property: 'include_disabled',
					},
				},
			},
		],
	},
];
