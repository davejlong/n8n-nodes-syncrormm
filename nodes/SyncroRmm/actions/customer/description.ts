import { INodeProperties } from "n8n-workflow";
import { addressFixedCollection } from "../../methods/commonFields";
import { CustomerProperties } from "../interfaces";

const customerCommonFields: INodeProperties[] = [
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
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		default: '',
		placeholder: 'John Doe',
		description: 'Search query, it can be anything related to customer data like name, business, etc',
	},
];

export const customerDescription: CustomerProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get', 'update'],
			},
		},
		default: '',
	},
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
			...customerCommonFields,
		],
	},
	{
		displayName: 'Customer Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Customer Fields',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			...customerCommonFields,
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@example.com',
				default: '',
			},
		],
	}
];
