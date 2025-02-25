# n8n-nodes-syncrormm

*Warning: This node is still in very early development and is not expected to be very functional yet.*

This is an n8n community node to work with the Syncro RMM API in your n8n workflows.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Resources](#resources)  
[Why not the build-in-node?](#why-not-the-built-in-node)
[Funding](#funding)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Alerts

* Create new alerts
* Get RMM alerts with filtering support

### Contacts

* Create new contacts
* Get contacts with filtering support

### Customers

* Create new customers
* Get customers with filtering support

### Tickets

* Create tickets with populated dropdowns for type and status
* Get tickets with filtering support

## Credentials

This node requires your Syncro tenant subdomain and an API key. 

API key requires the following permissions:

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