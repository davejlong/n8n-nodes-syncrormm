import type { INodeProperties } from "n8n-workflow";

export const resourceOptions = [
  {
    name: 'Assets',
    value: 'assets'
  },
  {
    name: 'Customers',
    value: 'customers'
  }
];

export const resourceProperty: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: resourceOptions,
  default: 'assets'
};