import type { TicketProperties } from '../../interfaces';

export const getTickets: TicketProperties = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Contact ID',
				name: 'contactId',
				type: 'string',
				default: '',
				description: 'Retrieve tickets for contact ID'
			},
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'string',
				default: '',
				description: 'Retrieve tickets for customer ID'
			},
			{
				displayName: 'Search Query',
				name: 'query',
				type: 'string',
				default: '',
				placeholder: 'Login Issue',
				description: 'Search query, it can be anything related to ticket data like user etc',
			},
			{
				displayName: 'Status Name or ID',
				name: 'status',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getTicketStatusOptions',
					loadOptionsDependsOn: ['includeBlank'],
					loadOptionsParameters: {
						includeBlank: false
					}
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
			},
			{
				displayName: 'Ticket Search ID',
				name: 'ticketSearchId',
				type: 'string',
				default: '',
				description: 'Tickets matching a saved ticket search',
			},
		],
	},
];
