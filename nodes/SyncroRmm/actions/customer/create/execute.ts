import { IDataObject, IExecuteFunctions, INodeExecutionData, JsonObject, NodeApiError } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function addCustomer(
	this: IExecuteFunctions,
	index: number
): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', index) as IDataObject;
	const {
		address,
		businessName,
		firstName,
		getSms,
		invoiceCcEmails,
		lastName,
		noEmail,
		notes,
		notificationEmail,
		phone,
		referredBy
	} = this.getNodeParameter('additionalFields', index);

	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'customers';
	let body = {} as IDataObject;
	let addressData = address as IDataObject;

	if (addressData) {
		addressData = addressData.addressFields as IDataObject;
		addressData.address_2 = addressData.address2;
	}

	body = {
		...addressData,
		business_name: businessName,
		email,
		firstName,
		get_sms: getSms,
		invoice_cc_emails: ((invoiceCcEmails as string[]) || []).join(','),
		lastName,
		no_email: noEmail,
		notes,
		notification_email: notificationEmail,
		phone,
		referred_by: referredBy,
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	if (!responseData.customer) {
		throw new NodeApiError(this.getNode(), responseData as JsonObject);
	}
	return this.helpers.returnJsonArray(responseData.customer as IDataObject);
}
