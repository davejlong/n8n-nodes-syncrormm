import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function getUsers(
	this: IExecuteFunctions,
	index: number
): Promise<INodeExecutionData[]> {
	let qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = 'users';
	const body = {} as IDataObject;

	let responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	let userList = (responseData.users as [number, string][]).map(([id, name]) => ({ id, name }));
	return this.helpers.returnJsonArray(userList as IDataObject[]);
}
