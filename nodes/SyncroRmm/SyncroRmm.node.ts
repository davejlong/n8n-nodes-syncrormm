import {
	ICredentialDataDecryptedObject,
	ICredentialsDecrypted,
	ICredentialTestFunctions,
  IExecuteFunctions,
	INodeCredentialTestResult,
	INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';

import { router } from './actions/router';
import { validateCredentials } from './transport';

import { getTicketStatusOptions, getTicketTypeOptions } from './methods/loadOptions';

import * as alert from './actions/alert';
import * as asset from './actions/asset';
import * as customer from './actions/customer';
import * as contact from './actions/contact';
import * as ticket from './actions/ticket';

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
					{
						name: 'Alert',
						value: 'alert',
					},
					{
						name: 'Asset',
						value: 'asset',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Ticket',
						value: 'ticket',
					},
				],
				default: 'customer',
			},
			...alert.descriptions,
			...asset.descriptions,
			...contact.descriptions,
			...customer.descriptions,
			...ticket.descriptions,
    ]
  };

methods = {
	loadOptions: {
		getTicketStatusOptions,
		getTicketTypeOptions,
	},
	credentialTest: {
		async syncroRmmApiCredentialTest(
			this: ICredentialTestFunctions,
			credential: ICredentialsDecrypted,
		): Promise<INodeCredentialTestResult> {
			try {
				await validateCredentials.call(this, credential.data as ICredentialDataDecryptedObject);
			} catch (error) {
				if (error.statusCode === 401) {
					return {
						status: 'Error',
						message: 'The API Key included in the request is invalid',
					};
				}
			};

			return {
				status: 'OK',
				message: 'Connection successful!',
			};
		},
	},
};

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
