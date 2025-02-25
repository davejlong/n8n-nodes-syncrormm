import type { AssetProperties } from "../../interfaces";

export const assetCreateDescription: AssetProperties = [
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
        name: 'assetName',
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
    }
]