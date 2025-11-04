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
						type: 'sort',
						properties: {
							key: 'name',
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: "={{ $responseItem.name }}",
							value: "={{ $responseItem.name }}",
						},
					},
				],
			},
		},
	},

	GetAssetCustomFields: {
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
							property: 'assets.asset_type_fields',
						}
					},
					{
						type: 'filter',
						properties: {
							pass: "={{($parameter.assetTypeId ? $responseItem.asset_type_id == $parameter.assetTypeId : true)",
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: "={{ $responseItem.name }}",
							value: "={{ $responseItem.name }}",
						},
					}
				],
			},
		},
	},

	GetCustomers: {
		routing: {
			request: {
				method: 'GET',
				url: '/customers',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'customers',
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: "={{ $responseItem.business_name }}",
							value: "={{ $responseItem.id }}",
						},
					},
				],
			},
		},
	},

	GetAssetTypes: {
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
							property: 'assets.asset_types',
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: "={{ $responseItem.name }}",
							value: "={{ $responseItem.id }}",
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
	},
};
