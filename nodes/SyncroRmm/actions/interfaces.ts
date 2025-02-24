import type {
	AllEntities,
	Entity,
	PropertiesOf
} from "n8n-workflow";

type SyncroRmmMap = {
	customer: 'get' | 'getAll';
};

export type SyncroRmm = AllEntities<SyncroRmmMap>;

export type SyncroRmmMapCustomer = Entity<SyncroRmmMap, 'customer'>;

export type CustomerProperties = PropertiesOf<SyncroRmmMapCustomer>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
