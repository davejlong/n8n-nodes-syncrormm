import { INodeProperties } from "n8n-workflow"
import { getAllDescription } from "./getAll";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['getAll'],
			},
		},
		default: 'getAll',
		options: [
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
									property: 'properties',
								},
							},
						],
					},
				},
			}
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
				operation: ['get'],
			},
		},
	},

	...getAllDescription,
];
