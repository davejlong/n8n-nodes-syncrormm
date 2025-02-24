import type { ContactProperties } from '../../interfaces';

export const contactGetDescription: ContactProperties = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Get specific contact by ID',
	},
];
