import { INodeProperties } from "n8n-workflow";
import { LoadOptions } from "../../utilities/LoadOptions";
import { BuildCustomFieldsObject } from "../../utilities/GenericFunctions";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Asset Serial',
				name: 'assetSerial',
				type: 'string',
				default: '',
				description: 'Serial number of the asset',
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
				description: 'ID of the asset type',
				routing: {
					send: {
						type: 'body',
						property: 'asset_type_id',
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
				description: 'ID of the customer the asset is assigned to',
				routing: {
					send: {
						type: 'body',
						property: 'customer_id',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the asset',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
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
				operation: ['update'],
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
							loadOptionsDependsOn: ['fields.assetTypeId'],
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
