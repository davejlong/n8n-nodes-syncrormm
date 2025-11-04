import { INodeProperties } from "n8n-workflow";
import { LoadOptions } from "../../utilities/LoadOptions";
import { BuildCustomFieldsObject } from "../../utilities/GenericFunctions";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'Laptop',
		description: 'Name of the asset',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'options',
		typeOptions: {
			loadOptions: LoadOptions.GetCustomers,
		},
		default: '',
		description: 'ID of the customer the asset belongs to',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'customer_id',
			},
		},
	},
	{
		displayName: 'Asset Serial',
		name: 'assetSerial',
		type: 'string',
		default: '',
		description: 'Serial number of the asset',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'asset_serial',
			},
		},
	},
	{
		displayName: 'Asset Type ID',
		name: 'assetTypeId',
		type: 'options',
		typeOptions: {
			loadOptions: LoadOptions.GetAssetTypes,
		},
		default: '',
		description: 'Type of the asset',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'asset_type_id',
			},
		},
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add Custom Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		description: 'Set custom field values',
		default: [],
		options: [
			{
				displayName: 'Custom Field',
				name: 'customField',
				values: [
					{
						displayName: 'Field Name or ID',
						name: 'fieldId',
						type: 'options',
						typeOptions: {
							loadOptionsDependsOn: ['assetTypeId'],
							loadOptions: LoadOptions.GetAssetCustomFields,
						},
						default: '',
						description: 'Custom field to set a value for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value to set on custom field',
					},
				],
			},
		],
		routing: {
			send: {
				preSend: [BuildCustomFieldsObject],
			}
		}
	},
];
