import {
	INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';

import * as Customers from './actions/customers';
import * as Users from './actions/users';

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
        name: 'syncroRmmApi',
        required: true
      }
    ],
    requestDefaults: {
      baseURL: "=https://{{$credentials.subdomain}}.syncromsp.com/api/v1",
			url: '',
      headers: {
        'Authorization': '={{$credentials.apiKey}}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    },
    properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					// {
					// 	name: 'Alert',
					// 	value: 'alerts',
					// },
					// {
					// 	name: 'Asset',
					// 	value: 'assets',
					// },
					// {
					// 	name: 'Contact',
					// 	value: 'contacts',
					// },
					{
						name: 'Customer',
						value: 'customers',
					},
					// {
					// 	name: 'Ticket',
					// 	value: 'tickets',
					// },
					// {
					// 	name: 'Timer Entry',
					// 	value: 'timer_entrys',
					// },
					{
						name: 'User',
						value: 'users',
					},
				],
				default: 'customers',
			},
			...Customers.description,
			...Users.description,
    ]
  };
}
