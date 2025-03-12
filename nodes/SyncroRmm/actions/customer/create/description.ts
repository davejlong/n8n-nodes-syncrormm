import { CustomerProperties } from "../../interfaces";
import { CustomerCommonFields } from "../description";

export const createCustomer: CustomerProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Customer Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Customer Fields',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			...CustomerCommonFields,
		],
	},
];
