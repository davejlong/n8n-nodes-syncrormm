import type { TicketProperties } from '../../interfaces';

export const getTicket: TicketProperties = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Get specific ticket by ID',
	},
];
