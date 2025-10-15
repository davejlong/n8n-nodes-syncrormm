import { getAllDescription } from "./getAll";
import { getDescription } from "./get";
import { INodeProperties } from "n8n-workflow";
import { UsersPostReceiveAction } from "../../utilities/GenericFunctions";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a user',
				action: 'Get a user',
				routing: {
					request: {
						method: 'GET',
						url: "=/users/{{$parameter.id}}",
					}
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many users',
				action: 'Get many users',
				routing: {
					request: {
						method: 'GET',
						url: '/users',
					},
					send: {
						paginate: true,
					},
					output: {
						postReceive: [UsersPostReceiveAction]
					}
				},
			},
		],
	},

	{
		displayName: 'User ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['get'],
			},
		},
	},

	...getDescription,
	...getAllDescription,
];
