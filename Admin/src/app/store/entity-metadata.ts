import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  users: {},
  user_permissions: {},
  logs: {},
};

const pluralNames = { 
  users: 'users',
  logs: 'logs',
  user_permissions: 'user_permissions',
 };

export const entityConfig: EntityDataModuleConfig = { 
  entityMetadata,
  pluralNames
};
