import type { AssetProperties } from "../../interfaces";

export const getAsset: AssetProperties = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['asset'],
				operation: ['get'],
			},
		},
		default: '',
	},
];
