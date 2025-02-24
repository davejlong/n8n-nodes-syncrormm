import type { AlertProperties } from '../../interfaces';

export const alertGetDescription: AlertProperties = [
	{
		displayName: 'RMM Alert ID',
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
