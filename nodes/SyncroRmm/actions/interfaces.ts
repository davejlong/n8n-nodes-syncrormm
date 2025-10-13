import type {
	AllEntities,
	Entity,
	PropertiesOf
} from "n8n-workflow";

type SyncroRmmMap = {
	alert: 'get' | 'getAll' | 'create';
	asset: 'get' | 'getAll' | 'create' | 'update';
	customer: 'get' | 'getAll' | 'create' | 'update';
	contact: 'get' | 'getAll' | 'create' | 'update';
	ticket: 'get' | 'getAll' | 'create' | 'update';
	timer_entry: 'create';
	user: 'get' | 'getAll';
};

export type SyncroRmm = AllEntities<SyncroRmmMap>;

export type SyncroRmmMapAlert = Entity<SyncroRmmMap, 'alert'>;
export type SyncroRmmMapAsset = Entity<SyncroRmmMap, 'asset'>;
export type SyncroRmmMapCustomer = Entity<SyncroRmmMap, 'customer'>;
export type SyncroRmmMapContact = Entity<SyncroRmmMap, 'contact'>;
export type SyncroRmmMapTicket = Entity<SyncroRmmMap, 'ticket'>;
export type SyncroRmmMapTimerEntry = Entity<SyncroRmmMap, 'timer_entry'>;
export type SyncroRmmMapUser = Entity<SyncroRmmMap, 'user'>;

export type AlertProperties = PropertiesOf<SyncroRmmMapAlert>;
export type AssetProperties = PropertiesOf<SyncroRmmMapAsset>;
export type CustomerProperties = PropertiesOf<SyncroRmmMapCustomer>;
export type ContactProperties = PropertiesOf<SyncroRmmMapContact>;
export type TicketProperties = PropertiesOf<SyncroRmmMapTicket>;
export type TimerEntryProperties = PropertiesOf<SyncroRmmMapTimerEntry>;
export type UserProperties = PropertiesOf<SyncroRmmMapUser>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
