import { INodeProperties } from "n8n-workflow";
import type { AssetProperties } from "../interfaces";

const assetCommonFields: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'number',
		default: undefined,
	},
	{
		displayName: 'Asset Type ID',
		name: 'assetTypeId',
		type: 'number',
		default: undefined,
	},
	{
		displayName: 'Asset Name',
		name: 'name',
		type: 'string',
		default: undefined,
	},
	{
		displayName: 'Serial Number',
		name: 'assetSerial',
		type: 'string',
		default: undefined,
	}
];

export const assetDescription: AssetProperties = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['get', 'update'],
			},
		},
		default: '',
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Asset Type ID',
		name: 'assetTypeId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Asset Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Serial Number',
		name: 'assetSerial',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['create'],
			},
		},
		default: undefined,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			...assetCommonFields,
		],
	},
];
