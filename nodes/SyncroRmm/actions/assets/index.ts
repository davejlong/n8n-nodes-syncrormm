import { INodeProperties } from "n8n-workflow"

import { createDescription } from "./create";
import { getAllDescription } from "./getAll";
import { updateDescription } from "./update";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['assets'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an asset',
				action: 'Create an asset',
				routing: {
					request: {
						method: 'POST',
						url: '/customer_assets',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'asset',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many assets',
				action: 'Get many assets',
				routing: {
					request: {
						method: 'GET',
						url: '/customer_assets',
					},
					send: {
						paginate: true,
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'assets'
								},
							},
						],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an asset',
				action: 'Get an asset',
				routing: {
					request: {
						method: 'GET',
						url: "=/customer_assets/{{$parameter.id}}",
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'asset',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an asset',
				action: 'Update an asset',
				routing: {
					request: {
						method: 'PUT',
						url: "=/customer_assets/{{$parameter.id}}",
					},
				},
			},
		],
	},

	{
		displayName: 'Asset ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['get', 'update'],
			},
		},
	},

	...createDescription,
	...getAllDescription,
	...updateDescription,
];
