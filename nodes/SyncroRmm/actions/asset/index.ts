import type { INodeProperties } from "n8n-workflow";

import * as create from './create';
import * as get from './get';
import * as getAll from './getAll';
import * as update from './update';
import { assetDescription } from "./description";

export { create, get, getAll, update };

export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['asset'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new asset',
				action: 'Create an asset',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve asset',
				action: 'Get an asset',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many assets',
				action: 'Get many assets',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update asset',
				action: 'Update asset',
			},
		],
		default: 'getAll',
	},
];

export const descriptions = [
	...assetDescription,
	...getAll.description,
] as INodeProperties[];
