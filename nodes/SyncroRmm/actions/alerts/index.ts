import { INodeProperties } from "n8n-workflow";

import { muteDescription } from "./mute";
import { createDescription } from "./create";
import { getAllDescription } from "./getAll";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['alerts'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an alert',
				action: 'Create an alert',
				routing: {
					request: {
						method: 'POST',
						url: '/rmm_alerts',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an alert',
				action: 'Delete an alert',
				routing: {
					request: {
						method: 'DELETE',
						url: '/rmm_alerts/{{ $parameter.id }}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an alert',
				action: 'Get an alert',
				routing: {
					request: {
						method: 'GET',
						url: '/rmm_alerts/{{ $parameter.id }}',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'rmm_alert',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many alerts',
				action: 'Get many alerts',
				routing: {
					request: {
						method: 'GET',
						url: '/rmm_alerts',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'rmm_alerts',
								},
							},
						],
					},
				},
			},
			{
				name: 'Mute',
				value: 'mute',
				description: 'Mute an alert',
				action: 'Mute an alert',
				routing: {
					request: {
						method: 'POST',
						url: '/rmm_alerts/{{ $parameter.id }}/mute',
					},
				},
			},
		],
	},

	{
		displayName: 'Alert ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		description: 'ID of the alert',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['get', 'delete', 'mute'],
			},
		},
	},


	...createDescription,
	...getAllDescription,
	...muteDescription,
];
