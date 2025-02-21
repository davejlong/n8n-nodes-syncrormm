import {
  INodeType,
  INodeTypeDescription
} from 'n8n-workflow';

import * as descriptions from './descriptions';
import { resourceProperty } from './descriptions/resources';

export class SyncroRmm implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Syncro RMM',
    name: 'syncroRmm',
    icon: 'file:syncromsp.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Work with the Syncro RMM API',
    defaults: {
      name: 'Syncro RMM'
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'SyncroRmmApi',
        required: true
      }
    ],
    requestDefaults: {
      baseURL: "=https://{{$credentials.subdomain}}.syncromsp.com/api/v1",
      headers: {
        'Authorization': '={{$credentials.apiKey}}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    },
    properties: [
      resourceProperty,
      ...descriptions.assetsOperations,
      ...descriptions.assetsFields,
      ...descriptions.customersOperations,
      ...descriptions.customersFields,
    ]
  }
}