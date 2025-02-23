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
          send: {
            paginate: true
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
  // ---------------------------------
  // assets:getAll
  // ---------------------------------
  {
    displayName: 'Filters',
    name: 'filters',
    type: 'collection',
    placeholder: 'Add Filter',
    default: {},
    displayOptions: {
      show: {
        resource: ['assets'],
        operation: ['getAll']
      }
    },
    options: [
      {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'number',
        default: undefined,
        description: 'Filter assets by Customer ID',
        routing: {
          send: {
            type: 'query',
            property: 'customer_id'
          }
        }
      },
      {
        displayName: 'Asset Type ID',
        name: 'assetTypeId',
        type: 'number', 
        default: undefined,
        description: 'Filter assets by Asset Type',
        routing: {
          send: {
            type: 'query',
            property: 'asset_type_id'
          }
        }
      },
      // Asset Search ID is exclusive and can't be
      // combined with any other paramters in Syncro.
      {
        displayName: 'Asset Search ID',
        name: 'assetSearchId',
        type: 'number',
        default: undefined,
        description: 'Filter assets by Saved Asset Search',
        routing: {
          send: {
            type: 'query',
            property: 'asset_search_id'
          }
        }
      },
      {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        default: undefined,
        description: 'Filter customers by a search query',
        routing: {
          send: {
            type: 'query',
            property: 'query'
          }
        }
      },
    ]
  }
]