import { INodeProperties } from "n8n-workflow";
import { AddressProperties } from "../../utilities/CommonProperties";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'name@email.com',
		description: 'Email address of the customer',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Business Name',
				name: 'businessName',
				type: 'string',
				default: '',
				description: 'Business name of the customer',
				routing: {
					send: {
						type: 'body',
						property: 'business_name',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'First name of the customer',
				routing: {
					send: {
						type: 'body',
						property: 'firstname',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Last name of the customer',
				routing: {
					send: {
						type: 'body',
						property: 'lastname',
					},
				},
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number of the customer',
				routing: {
					send: {
						type: 'body',
						property: 'phone',
					},
				},
			},
			...AddressProperties,
			{
				displayName: 'Get SMS',
				name: 'getSms',
				type: 'boolean',
				default: true,
				description: 'Whether or not the customer wants to receive SMS messages',
				routing: {
					send: {
						type: 'body',
						property: 'get_sms',
					},
				},
			},
			{
				displayName: 'Invoice Emails',
				name: 'invoiceEmails',
				type: 'string',
				default: '',
				typeOptions: {
					multipleValueButtonText: 'Add Email',
					multipleValues: true,
				},
				description: 'Additional email addresses to send invoices to',
				routing: {
					send: {
						type: 'body',
						property: 'invoice_cc_emails',
						value: "={{$value.join(',')}}",
					},
				},
			},
			{
				displayName: 'No Email',
				name: 'noEmail',
				type: 'boolean',
				default: false,
				description: 'Whether or not the customer wants to receive emails',
				routing: {
					send: {
						type: 'body',
						property: 'no_email',
					},
				},
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes about the customer',
				routing: {
					send: {
						type: 'body',
						property: 'notes',
					},
				},
			},
			{
				displayName: 'Notification Email',
				name: 'notificationEmail',
				type: 'string',
				default: '',
				description: 'Email address to send notifications to',
				routing: {
					send: {
						type: 'body',
						property: 'notification_email',
					},
				},
			},
			{
				displayName: 'Referred By',
				name: 'referredBy',
				type: 'string',
				default: '',
				description: 'Where the customer came from',
				routing: {
					send: {
						type: 'body',
						property: 'referred_by',
					},
				},
			},
		],
	}
];
