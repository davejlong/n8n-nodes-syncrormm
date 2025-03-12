import { CustomerProperties } from "../../interfaces";

export const getCustomer: CustomerProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		default: '',
	},
];
