import { INodeProperties } from 'n8n-workflow';

export const ticketCommonFields: INodeProperties[] = [
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
