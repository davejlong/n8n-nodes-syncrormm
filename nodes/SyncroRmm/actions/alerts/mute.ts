import { INodeProperties } from "n8n-workflow";

export const muteDescription: INodeProperties[] = [
	{
		displayName: 'Mute for',
		name: 'muteFor',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['mute'],
			},
		},
		default: '1-hour',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: '1 Hour',
				value: '1-hour',
			},
			{
				name: '1 Day',
				value: '1-day',
			},
			{
				name: '2 Days',
				value: '2-days',
			},
			{
				name: '1 Week',
				value: '1-week',
			},
			{
				name: '2 Weeks',
				value: '2-weeks',
			},
			{
				name: '1 Month',
				value: '1-month',
			},
			{
				name: 'Forever',
				value: 'forever',
			},
		],
	},
];
