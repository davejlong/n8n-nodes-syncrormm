import type { INodeProperties } from 'n8n-workflow';

export const assetsOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['assets']
      }
    },
    options: [
      {
        name: 'Get',
        value: 'get',
        description: 'Get an asset by ID',
        action: 'Get an asset',
        routing: {
          request: {
            method: 'GET'
          },
          output: {
            postReceive: [
              {
                type: 'rootProperty',
                properties: {
                  property: 'asset'
                }
              }
            ]
          }
        }
      },
      {
        name: 'Get Many',
        value: 'getAll',
        description: 'Retrieve a list of assets',
        action: 'Retrieve a list of assets',
        routing: {
          request: {
            method: 'GET',
            url: '/customer_assets',
          },
          operations: {
            pagination: {
              type: 'generic',
              properties: {
                continue: '={{ $response.body["meta"].page < $response.body["meta"].total_pages }}',
                request: {
                  qs: {
                    page: '={{ $response.body["meta"].page ? $response.body["meta"].page + 1 : 1 }}'
			            }
                }
              }
            }
          },
          output: {
            postReceive: [
              {
                type: 'rootProperty',
                properties: {
                  property: 'assets'
                }
              }
            ]
          },
        }
      }
    ],
    default: 'getAll'
  }
]

export const assetsFields: INodeProperties[] = [
  // ---------------------------------
  // assets:single operations (get/update/delete)
  // ---------------------------------
  {
    displayName: 'Asset ID',
    name: 'id',
    type: 'number',
    required: true,
    displayOptions: {
      show: {
        resource: ['assets'],
        operation: ['get', 'delete', 'update']
      }
    },
    default: '',
    description: 'The ID of the asset to operate on',
    routing: {
      request: {
        url: '=/customer_assets/{{encodeURIComponent($value)}}'
      }
    }
  },
]