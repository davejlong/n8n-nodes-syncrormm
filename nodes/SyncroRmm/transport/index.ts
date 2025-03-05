import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	GenericValue,
	ICredentialDataDecryptedObject,
	ICredentialTestFunctions,
	IDataObject,
	IHttpRequestOptions,
	JsonObject,
	IHttpRequestMethods,
	INodeExecutionData,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

/**
 * Make an API request to Mattermost
 */
export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	query: IDataObject = {},
) {
	const credentials = await this.getCredentials('syncroRmmApi');

	query.api_key = credentials.apiKey;

	const options: IHttpRequestOptions = {
		method,
		body,
		qs: query,
		url: `https://${credentials.subdomain}.syncromsp.com/api/v1/${endpoint}`,
		headers: {},
	};

	try {
		return await this.helpers.httpRequest(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function apiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
	property?: string,
) {
	let returnData: IDataObject[] = [];

	let responseData;
	query.page = 1;

	if (!property) { property = endpoint; }

	do {
		responseData = await apiRequest.call(this, method, endpoint, body, query);
		query.page++;
		returnData = returnData.concat(responseData[property] as IDataObject[]);
	} while (responseData[property].length !== 0);
	return returnData;
}

export async function validateCredentials(
	this: ICredentialTestFunctions,
	decryptedCredentials: ICredentialDataDecryptedObject,
): Promise<any> {
	const credentials = decryptedCredentials;

	const { subdomain, apiKey } = credentials as {
		subdomain: string;
		apiKey: string;
	};

	const options: IHttpRequestOptions = {
		method: 'GET',
		qs: {
			api_key: apiKey,
		},
		url: `https://${subdomain}.syncromsp.com/api/v1/me`,
	};

	return await this.helpers.request(options);
}

export async function syncroGetRequest(
	this: IExecuteFunctions,
	endpoint: string,
	responseKey?: string,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const body = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	let response = responseData;
	if (responseKey) { response = responseData[responseKey]; }
	return this.helpers.returnJsonArray(response as IDataObject);
}
