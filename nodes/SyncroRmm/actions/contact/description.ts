import { INodeProperties } from 'n8n-workflow';
import { addressFixedCollection } from '../../methods/commonFields';

export const contactCommonFields: INodeProperties[] = [
	addressFixedCollection,
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
	},
];
