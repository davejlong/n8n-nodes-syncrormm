import { INodeProperties } from "n8n-workflow";
import { addressFixedCollection } from "../../methods/commonFields";

export const CustomerCommonFields: INodeProperties[] = [
	addressFixedCollection,
	{
		displayName: 'Business Name',
		name: 'businessName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Last Name',
		name: 'lastname',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Get SMS',
		name: 'getSms',
		type: 'boolean',
		default: false,
	},
	{
		displayName: 'Invoice Emails',
		name: 'invoiceCcEmails',
		type: 'string',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add Email',
		},
		default: '',
	},
	{
		displayName: 'No Email',
		name: 'noEmail',
		type: 'boolean',
		default: false,
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Notification Email',
		name: 'notificationEmail',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				noEmail: [false],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Referred By',
		name: 'referredBy',
		type: 'string',
		default: '',
		description: 'Source from which customer is referred to the platform like Linkedin, Google, Customer name etc',
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add Custom Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		description: 'Set custom field values',
		default: {},
		options: [
			{
				name: 'customFields',
				displayName: 'Custom Field',
				values: [
					{
						displayName: 'Field Name or ID',
						name: 'fieldId',
						type: 'options',
						typeOptions: {
							loadOptionsMethod: 'getCustomerCustomFields',
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
					}
				],
			}
		]
	},
];
