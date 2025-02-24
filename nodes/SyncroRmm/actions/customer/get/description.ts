import type { CustomerProperties } from "../../interfaces";

export const customerGetDescription: CustomerProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of customer',
	},
];
