import { TimerEntryProperties } from "../../interfaces";

export const createTimerEntry: TimerEntryProperties = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['timer_entry'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Start At',
		name: 'startAt',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['timer_entry'],
				operation: ['create'],
			},
		},
		default: Date.now(),
	},
	{
		displayName: 'End At',
		name: 'endAt',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['timer_entry'],
				operation: ['create'],
			},
		},
		default: Date.now(),
	},
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['timer_entry'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timer_entry'],
				operation: ['create'],
			},
		},
		default: '',
	}
];
