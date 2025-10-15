import { INodeProperties } from "n8n-workflow";

export const AddressProperties: INodeProperties[] = [
	{
		displayName: 'Address 1',
		name: 'address1',
		type: 'string',
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'address',
			},
		},
	},
	{
		displayName: 'Address 2',
		name: 'address2',
		type: 'string',
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'address_2',
			},
		},
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'city',
			}
		},
	},
	{
		displayName: 'State',
		name: 'state',
		type: 'string',
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'state',
			}
		},
	},
	{
		displayName: 'Zip',
		name: 'zip',
		type: 'string',
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'zip',
			}
		},
	},
];
