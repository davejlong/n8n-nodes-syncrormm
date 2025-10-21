import { ILoadOptions } from "n8n-workflow"

export const LoadOptions: { [key: string]: ILoadOptions } = {
	GetCustomerCustomFields: {
		routing: {
			request: {
				method: 'GET',
				url: '/settings',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'customers.customer_fields',
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: "={{ $responseItem.name }}",
							value: "={{ $responseItem.name }}",
						},
					},
					{
						type: 'sort',
						properties: {
							key: 'name',
						},
					},
				],
			},
		},
	}
};
