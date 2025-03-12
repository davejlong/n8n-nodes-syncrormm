import type { AlertProperties } from '../../interfaces';

export const getAlert: AlertProperties = [
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Get specific RMM alert by ID',
	},
];
