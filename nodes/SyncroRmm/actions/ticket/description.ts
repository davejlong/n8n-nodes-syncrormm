import { INodeProperties } from 'n8n-workflow';
import type { TicketProperties } from '../interfaces';

const ticketCommonFields: INodeProperties[] = [
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
	{
		displayName: 'Issue Type Name or ID',
		name: 'issueType',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTicketTypeOptions',
			loadOptionsDependsOn: ['includeBlank'],
			loadOptionsParameters: {
				includeBlank: false
			}
		},
		default: '',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
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
];

export const ticketDescription: TicketProperties = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['get', 'update'],
			},
		},
		default: '',
		description: 'Get specific ticket by ID',
	},
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
			...ticketCommonFields,
			{
				displayName: 'Comment',
				name: 'comment',
				type: 'string',
				default: '',
				description: 'Comment to add to the ticket',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			...ticketCommonFields,
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
			},
		],
	},
];
