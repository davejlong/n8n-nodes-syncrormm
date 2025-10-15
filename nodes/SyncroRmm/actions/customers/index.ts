import { INodeProperties } from "n8n-workflow";

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
				resource: ['customers'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a customer',
				action: 'Create a customer',
				routing: {
					request: {
						method: 'POST',
						url: '/customers',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'customer',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a customer',
				action: 'Delete a customer',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/customers/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a customer',
				action: 'Get a customer',
				routing: {
					request: {
						method: 'GET',
						url: "=/customers/{{$parameter.id}}",
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'customer',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many customers',
				action: 'Get many customers',
				routing: {
					request: {
						method: 'GET',
						url: '/customers',
					},
					send: {
						paginate: true,
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'customers'
								},
							},
						],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a customer',
				action: 'Update a customer',
				routing: {
					request: {
						method: 'PUT',
						url: "=/customers/{{$parameter.id}}",
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'customer',
								},
							},
						],
					},
				},
			},
		],
	},

	{
		displayName: 'Customer ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['delete', 'get', 'update'],
			},
		},
	},

	...createDescription,
	...getAllDescription,
	...updateDescription,
];
