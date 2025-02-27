import type { TicketProperties } from '../../interfaces';

export const ticketCreateDescription: TicketProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
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
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Asset ID',
				name: 'assetId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Assign to Contact',
				name: 'contactId',
				type: 'string',
				default: '',
				description: 'The ID of the contact you want to assign the ticket to',
			},
			// {
			// 	displayName: 'Due Date',
			// 	name: 'dueDate',
			// 	type: 'dateTime',
			// 	default: '',
			// },
			{
				displayName: 'Issue Type Name or ID',
				name: 'issueType',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getTicketTypeOptions',
					loadOptionsDependsOn: ['includeBlank'],
					loadOptionsParameters: {
						includeBlank: false
					}
				},
				default: '',
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
				description: 'If used along the parameter Search Query, only Search Query will be applied. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
			},
		],
	},
];
