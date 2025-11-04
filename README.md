# n8n-nodes-syncrormm

This is an n8n community node to work with the Syncro RMM API in your n8n workflows.

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Resources](#resources)
- [Why not the built-in node?](#why-not-the-built-in-node)
- [Funding](#funding)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Appointment

* [ ] GET /appointments - Returns a paginated list of Appointments
* [ ] POST /appointments - Creates an Appointment
* [ ] GET /appointments/{id} - Retrieves an Appointment by ID
* [ ] PUT /appointments/{id} - Updates an existing Appointment by ID
* [ ] DELETE /appointments/{id} - Deletes an Appointment by ID

### Appointment Type

* [ ] GET /appointment_types - Returns a paginated list of Appointment Types
* [ ] POST /appointment_types - Creates an Appointment Type
* [ ] GET /appointment_types/{id} - Retrieves an Appointment Type by ID
* [ ] PUT /appointment_types/{id} - Updates an existing Appointment Type by ID
* [ ] DELETE /appointment_types/{id} - Deletes an Appointment Type by ID

### Asset

* [x] GET /customer_assets - Returns a paginated list of Assets
* [x] POST /customer_assets - Creates an Asset
* [x] GET /customer_assets/{id} - Retrieves an Asset by ID
* [x] PUT /customer_assets/{id} - Updates an existing Asset by ID

### Call

* [ ] GET /callerid - Get Caller ID

### Canned Response

* [ ] GET /canned_responses - Returns a list of Canned Responses with a query
* [ ] POST /canned_responses - Creates a new Canned Response
* [ ] PATCH /canned_responses/{id} - Updates a Canned Response
* [ ] DELETE /canned_responses/{id} - Deletes a Canned Response
* [ ] GET /canned_responses/settings - Returns the settings for Canned Responses

### Contact

* [ ] GET /contacts - Returns a paginated list of Contacts
* [ ] POST /contacts - Creates a Contact
* [ ] GET /contacts/{id} - Retrieves a Contact by ID
* [ ] PUT /contacts/{id} - Updates an existing Contact
* [ ] DELETE /contacts/{id} - Deletes a Contact

### Contract

* [ ] GET /contracts - Returns a paginated list of Contracts
* [ ] POST /contracts - Creates a Contract
* [ ] GET /contracts/{id} - Retrieves a Contract by ID
* [ ] PUT /contracts/{id} - Updates an existing Contract by ID
* [ ] DELETE /contracts/{id} - Deletes a Contract by ID

### Customer

* [x] GET /customers - Returns a paginated list of customers
* [x] POST /customers - Creates a Customer
* [x] GET /customers/{id} - Retrieves a Customer by ID
* [x] PUT /customers/{id} - Updates an existing Customer by ID
* [x] DELETE /customers/{id} - Deletes a Customer by ID
* [ ] GET /customers/latest - Returns latest Customer
* [ ] GET /customers/autocomplete - Returns a paginated list of customers for autocomplete query

### Estimate

* [ ] GET /estimates - Returns a paginated list of Estimates
* [ ] POST /estimates - Creates an Estimate
* [ ] GET /estimates/{id} - Retrieves an Estimate by ID or number
* [ ] PUT /estimates/{id} - Updates an existing Estimate by ID
* [ ] DELETE /estimates/{id} - Deletes an Estimate by ID
* [ ] POST /estimates/{id}/print - Queues a print job for an Estimate
* [ ] POST /estimates/{id}/email - Sends an Estimate to a Customer
* [ ] POST /estimates/{id}/line_items - Adds a Line Item to an Estimate
* [ ] POST /estimates/{id}/convert_to_invoice - Convert an Estimate to an Invoice
* [ ] PUT /estimates/{id}/line_items/{line_item_id} - Updates a Line Item
* [ ] DELETE /estimates/{id}/line_items/{line_item_id} - Deletes a Line Item

### Invoice

* [ ] GET /invoices - Returns a paginated list of Invoices
* [ ] POST /invoices - Creates an Invoice
* [ ] GET /invoices/{id} - Retrieves an Invoice by ID or Number
* [ ] PUT /invoices/{id} - Updates an existing invoice by ID
* [ ] DELETE /invoices/{id} - Deletes an invoice by ID
* [ ] GET /invoices/{id}/ticket - Returns the associated ticket for an invoice
* [ ] POST /invoices/{id}/print - Queues a print job for an invoice
* [ ] POST /invoices/{id}/email - Sends invoice to customer

### Invoice/Line item

* [ ] PUT /invoices/{id}/line_items/{line_item_id} - Updates an a line item of an invoice by ID
* [ ] DELETE /invoices/{id}/line_items/{line_item_id} - Deletes an a line item of an invoice by ID
* [ ] POST /invoices/{id}/line_items - Creates a new line item

### Item

* [ ] GET /items - Returns a paginated list of Part Orders

### Lead

* [ ] GET /leads - Returns a paginated list of Leads
* [ ] POST /leads - Creates a Lead
* [ ] GET /leads/{id} - Retrieves a Lead by ID
* [ ] PUT /leads/{id} - Updates an existing Lead by ID

### Line Item

* [ ] GET /line_items - Returns a paginated list of Line Items

### New Ticket Form

* [ ] GET /new_ticket_forms - Returns a paginated list of Ticket Forms
* [ ] GET /new_ticket_forms/{id} - Retrieves a Ticket Form
* [ ] POST /new_ticket_forms/{id}/process_form - Creates a new Ticket for a Ticket Form

### Payment

* [ ] GET /payments - Returns a paginated list of Payments
* [ ] POST /payments - Creates a Payment
* [ ] GET /payments/{id} - Retrieves a Payment by ID

### Payment Method

* [ ] GET /payment_methods - Returns a paginated list of Payment Methods

### Payment Profile

* [ ] GET /customers/{customer_id}/payment_profiles - Returns a paginated list of Payment Profiles
* [ ] POST /customers/{customer_id}/payment_profiles - Creates a Payment Profile
* [ ] GET /customers/{customer_id}/payment_profiles/{id} - Retrieves a Payment Profile by ID
* [ ] PUT /customers/{customer_id}/payment_profiles/{id} - Updates a Payment Profile
* [ ] DELETE /customers/{customer_id}/payment_profiles/{id} - Deletes a Payment Profile

### Phone

* [ ] GET /customers/{customer_id}/phones - Returns a paginated list of Phones
* [ ] POST /customers/{customer_id}/phones - Creates a Phone
* [ ] PUT /customers/{customer_id}/phones/{id} - Updates an existing Phone by ID
* [ ] DELETE /customers/{customer_id}/phones/{id} - Deletes a Phone by ID

### Portal User

* [ ] GET /portal_users - Returns a paginated list of Portal Users
* [ ] POST /portal_users - Creates a Portal User
* [ ] PUT /portal_users/{id} - Updates an existing Portal User by ID
* [ ] DELETE /portal_users/{id} - Deletes a Portal User by ID
* [ ] POST /portal_users/create_invitation - Creates an Invitation for a Portal User

### Product

* [ ] GET /products - Returns a paginated list of Products
* [ ] POST /products - Creates a Product
* [ ] GET /products/{id} - Retrieves a Product by ID
* [ ] PUT /products/{id} - Updates an existing Product by ID
* [ ] GET /products/barcode - Returns a Product by Barcode
* [ ] GET /products/categories - Returns a paginated list of Product Categories
* [ ] POST /products/{id}/add_images - Creates a Product Image
* [ ] DELETE /products/{id}/delete_image - Deletes a Product Image
* [ ] PUT /products/{id}/location_quantities - Updates a Location Quantity

### Product Serial

* [ ] GET /products/{product_id}/product_serials - Returns a paginated list of Product_serials
* [ ] POST /products/{product_id}/product_serials - Creates a Product Serial
* [ ] PUT /products/{product_id}/product_serials/{id} - Updates an existing Product Serial by ID
* [ ] POST /products/{product_id}/product_serials/attach_to_line_item - Adds Product Serials to a Line Item

### Product Sku

* [ ] GET /products/{product_id}/product_skus - Returns list of Product Skus
* [ ] POST /products/{product_id}/product_skus - Creates a Product Sku
* [ ] PUT /products/{product_id}/product_skus/{id} - Updates an existing Product Sku by ID

### Purchase Order

* [ ] GET /purchase_orders - Returns a paginated list of Purchase Orders
* [ ] POST /purchase_orders - Creates a Purchase Order
* [ ] GET /purchase_orders/{id} - Retrieves a Purchase Order by ID
* [ ] POST /purchase_orders/{id}/receive - receive purchase_order
* [ ] POST /purchase_orders/{id}/create_po_line_item - Adds a Product to a Purchase Order

### RMM Alert

* [ ] GET /rmm_alerts - Returns a paginated list of RMM Alerts
* [ ] POST /rmm_alerts - Creates an RMM Alert
* [ ] POST /rmm_alerts/{id}/mute - Mutes an RMM Alert by ID
* [ ] GET /rmm_alerts/{id} - Retrieves an RMM Alert by ID
* [ ] DELETE /rmm_alerts/{id} - Deletes/Clears an RMM Alert by ID

### Schedule

* [ ] GET /schedules - Returns a paginated list of Invoice Schedules
* [ ] POST /schedules - Creates an Invoice Schedule
* [ ] GET /schedules/{id} - Retrieves a Schedule by ID
* [ ] PUT /schedules/{id} - Updates an existing Invoice Schedule by ID
* [ ] DELETE /schedules/{id} - Deletes a Schedule by ID
* [ ] POST /schedules/{id}/add_line_item - Adds a Line Item to an Invoice Schedule
* [ ] POST /schedules/{id}/remove_line_item - Removes a Line Item from an Invoice Schedule
* [ ] PUT /schedules/{id}/line_items/{schedule_line_item_id} - Updates a Line Item

### Search

* [ ] GET /search - Search all the things

### Setting

* [ ] GET /settings - Returns a list of Account Settings
* [ ] GET /settings/tabs - Returns Tabs Settings
* [ ] GET /settings/printing - Returns Printing Settings

### Ticket

* [ ] GET /tickets - Returns a paginated list of Tickets
* [ ] POST /tickets - Creates a Ticket
* [ ] GET /tickets/{id} - Retrieves a Ticket by ID
* [ ] PUT /tickets/{id} - Updates an existing Ticket by ID
* [ ] DELETE /tickets/{id} - Deletes a Ticket by ID
* [ ] GET /tickets/settings - Returns Tickets Settings
* [ ] POST /tickets/{id}/print - Prints a Ticket by ID
* [ ] POST /tickets/{id}/comment - Adds a Comment to a Ticket
* [ ] POST /tickets/{id}/timer_entry - Create a Ticket Timer for a Ticket
* [ ] POST /tickets/{id}/add_line_item - Creates a Ticket Line Item
* [ ] POST /tickets/{id}/attach_file_url - Attach a file to a Ticket
* [ ] POST /tickets/{id}/remove_line_item - Deletes a Ticket Line Item
* [ ] PUT /tickets/{id}/update_line_item - Updates an existing Ticket Line Item
* [ ] POST /tickets/{id}/delete_attachment - Deletes a Ticket Attachment
* [ ] POST /tickets/{id}/delete_timer_entry - Deletes a Ticket Timer
* [ ] PUT /tickets/{id}/update_timer_entry - Updates an existing Ticket Timer
* [ ] POST /tickets/{id}/charge_timer_entry - Charges a Ticket Timer

### Ticket Timer

* [ ] GET /ticket_timers - Returns a paginated list of Ticket Timers

### Timelog

* [ ] GET /timelogs - Returns a paginated list of Timelogs
* [ ] PUT /timelogs - Updates a Timelog
* [ ] GET /timelogs/last - Returns last Timelog

### User

* [ ] GET /me - Returns the current user
* [x] GET /users - Returns a paginated list of Users
* [ ] POST /otp_login - Authorize a User with One Time Password
* [x] GET /users/{id} - Retrieves an existing User by ID

### User Device

* [ ] POST /user_devices - Creates a User Device
* [ ] GET /user_devices/{id} - Retrieves an existing User Device by UUID
* [ ] PUT /user_devices/{id} - Updates an existing User Device by UUID

### Vendor

* [ ] GET /vendors - Returns a paginated list of Vendors
* [ ] POST /vendors - Creates a Vendor
* [ ] GET /vendors/{id} - Retrieves a Vendor Page
* [ ] PUT /vendors/{id} - Updates an existing Vendor page by ID

### Wiki Page

* [ ] GET /wiki_pages - Returns a paginated list of Wiki Pages
* [ ] POST /wiki_pages - Creates a Wiki Page
* [ ] GET /wiki_pages/{id} - Retrieves a Wiki Page
* [ ] PUT /wiki_pages/{id} - Updates an existing Wiki Page by ID
* [ ] DELETE /wiki_pages/{id} - Deletes a Wiki Page by ID

### Worksheet Result

* [ ] GET /tickets/{ticket_id}/worksheet_results - Returns a paginated list of Worksheet Results
* [ ] POST /tickets/{ticket_id}/worksheet_results - Creates Worksheet Result
* [ ] GET /tickets/{ticket_id}/worksheet_results/{id} - Retrieves a Worksheet Result by ID
* [ ] PUT /tickets/{ticket_id}/worksheet_results/{id} - Updates a Worksheet Result
* [ ] DELETE /tickets/{ticket_id}/worksheet_results/{id} - Deletes a Worksheet Result


## Credentials

This node requires your Syncro tenant subdomain and an API key. 

API key requires the following permissions:

* Assets - View Details
* Assets - List/Search
* Assets - Create
* Contacts - Import
* Customers - Create
* Customers - List/Search
* Customers - View Detail
* Tickets - List/Search
* Tickets - View Details
* Tickets - Create
* RMM Alerts - List
* RMM Alerts - Create

## Compatibility

Tested against n8n 1.79.3+

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Syncro RMM API documentation](https://api-docs.syncromsp.com/)

## Why not the built-in node?

The SyncroMSP node built into n8n is extremely limited and buggy and this node is intended to be a complete rewrite. Once it's built out more, I will likely submit it to replace the SyncroMSP built-in node, but for now, I'm keeping it separate to ease the update process.

## Funding

If this community node helps you, please consider funding it's continued development.

<a href="https://www.buymeacoffee.com/davejlong" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
