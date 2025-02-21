import type { INodeProperties } from 'n8n-workflow';

export const customersOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['customers']
      }
    },
    options: [
      {
        name: 'Get',
        value: 'get',
        description: 'Get an customer by ID',
        action: 'Get an customer',
        routing: {
          request: {
            method: 'GET'
          },
          output: {
            postReceive: [
              {
                type: 'rootProperty',
                properties: {
                  property: 'customer'
                }
              }
            ]
          }
        }
      },
      {
        name: 'Get Many',
        value: 'getAll',
        description: 'Retrieve a list of customers',
        action: 'Retrieve a list of customers',
        routing: {
          request: {
            method: 'GET',
            url: "/customers"
          },
          output: {
            postReceive: [
              {
                type: 'rootProperty',
                properties: {
                  property: 'customers'
                }
              }
            ]
          }
        }
      }
    ],
    default: 'getAll'
  }
]

export const customersFields: INodeProperties[] = [
  // ---------------------------------
  // customers:single operations (get/update/delete)
  // ---------------------------------
  {
    displayName: 'Customer ID',
    name: 'id',
    type: 'number',
    required: true,
    displayOptions: {
      show: {
        resource: ['customers'],
        operation: ['get']
      }
    },
    default: '',
    description: 'The ID of the customer to operate on',
    routing: {
      request: {
        url: '=/customers/{{encodeURIComponent($value)}}'
      }
    }
  },
  // ---------------------------------
  // customers:getall
  // ---------------------------------
  {
    displayName: 'Filters',
    name: 'filters',
    type: 'collection',
    placeholder: 'Add Filter',
    default: {},
    displayOptions: {
      show: {
        resource: ['customers'],
        operation: ['getAll']
      }
    },
    options: [
      {
        displayName: 'Business Name',
        name: 'businessName',
        type: 'string',
        default: '',
        description: 'Filter customers by business name',
        routing: {
          send: {
            type: 'query',
            property: 'business_name'
          }
        }
      },
      {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        default: '',
        description: 'Filter customers by a search query',
        routing: {
          send: {
            type: 'query',
            property: 'query'
          }
        }
      },
      {
        displayName: 'First Name',
        name: 'firstName',
        type: 'string',
        default: '',
        description: 'Filter customers by first name',
        routing: {
          send: {
            type: 'query',
            property: 'firstname'
          }
        }

      },
      {
        displayName: 'Last Name',
        name: 'lastName',
        type: 'string',
        default: '',
        description: 'Filter customers by last name',
        routing: {
          send: {
            type: 'query',
            property: 'lastname'
          }
        }

      }
    ]
  }
]