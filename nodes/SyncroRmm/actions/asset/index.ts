import type { INodeProperties } from "n8n-workflow";

import * as create from './create';
import * as get from './get';
import * as getAll from './getAll';

export { create, get, getAll };

export const descriptions = [
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
        ],
        default: 'getAll',
    },
    ...create.description,
    ...get.description,
    ...getAll.description,
] as INodeProperties[];