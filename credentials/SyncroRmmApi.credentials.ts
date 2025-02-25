import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class SyncroRmmApi implements ICredentialType {
	name = 'syncroRmmApi';

	displayName = 'Syncro RMM API';

	documentationUrl = 'https://github.com/davejlong/n8n-nodes-syncrormm';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: "={{$credentials.apiKey}}"
			}
		}
	};

  test: ICredentialTestRequest = {
    request: {
      baseURL: '=https://{{$credentials.subdomain}}.syncromsp.com',
      url: '/api/v1/me',
      method: 'GET'
    }
  };
}
