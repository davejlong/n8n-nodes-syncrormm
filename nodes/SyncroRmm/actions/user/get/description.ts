import { UserProperties } from "../../interfaces";

export const getUser: UserProperties = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Get specific user by ID',
	},
];
