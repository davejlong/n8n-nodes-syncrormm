import { CustomerProperties } from "../../interfaces";

export const customerDescription: CustomerProperties = [
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
