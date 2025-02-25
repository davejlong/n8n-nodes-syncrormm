import type { AssetProperties } from '../../interfaces';

export const assetGetDescription: AssetProperties = [
    {
        displayName: 'Asset ID',
        name: 'assetId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['asset'],
                operation: ['get'],
            },
        },
        default: '',
        description: 'Get specific asset by ID',
    },
];