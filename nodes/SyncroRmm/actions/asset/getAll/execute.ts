import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest, apiRequestAllItems } from "../../../transport";

export async function getAll(
    this: IExecuteFunctions,
    index: number
): Promise<INodeExecutionData[]> {
    const returnAll = this.getNodeParameter('returnAll', index);
    const assetSearchId = this.getNodeParameter('assetSearchId', index);
    const filters = this.getNodeParameter('filters', index);

    let qs = {} as IDataObject;
    const requestMethod = 'GET'
    const endpoint = 'customer_assets';
    const body = {} as IDataObject;

    if (assetSearchId) {
        qs.asset_search_id = assetSearchId;
    } else if (filters) {
        qs = filters;
    }

    if (qs.customerId) { qs.customer_id = qs.customerId; }
    if (qs.assetTypeId) { qs.asset_type_id = qs.assettypeId; }
    if (!qs.snmpEnabled === undefined) {
        qs.snmp_enabled = qs.snmpEnabled;
    }

    if (!returnAll) {
        qs.per_page = this.getNodeParameter('limit', index);
    }

    let responseData;
    if (returnAll) {
        responseData = await apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData);
    } else {
        responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData.assets as IDataObject[]);
    }
}