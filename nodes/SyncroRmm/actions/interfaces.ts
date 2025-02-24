import type {
	AllEntities,
	Entity,
	PropertiesOf
} from "n8n-workflow";

type SyncroRmmMap = {
	alert: 'create' | 'get' | 'getAll';
	customer: 'create' | 'get' | 'getAll';
	contact: 'create' | 'get' | 'getAll';
	ticket: 'create' | 'get' | 'getAll';
};

export type SyncroRmm = AllEntities<SyncroRmmMap>;

export type SyncroRmmMapAlert = Entity<SyncroRmmMap, 'alert'>;
export type SyncroRmmMapCustomer = Entity<SyncroRmmMap, 'customer'>;
export type SyncroRmmMapContact = Entity<SyncroRmmMap, 'contact'>;
export type SyncroRmmMapTicket = Entity<SyncroRmmMap, 'ticket'>;

export type AlertProperties = PropertiesOf<SyncroRmmMapAlert>;
export type CustomerProperties = PropertiesOf<SyncroRmmMapCustomer>;
export type ContactProperties = PropertiesOf<SyncroRmmMapContact>;
export type TicketProperties = PropertiesOf<SyncroRmmMapTicket>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
