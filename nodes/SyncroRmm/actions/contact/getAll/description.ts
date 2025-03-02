// import { getAllCommonFields } from '../../../methods/commonFields';
import type { ContactProperties } from '../../interfaces';

export const contactGetAllDescription: ContactProperties = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['getAll']
			},
		},
		default: {},
		options: [
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'string',
				default: ''
			}
		],
	},
];
