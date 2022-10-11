import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  users: {},
};

const pluralNames = { 
  users: 'users',
 };

export const entityConfig: EntityDataModuleConfig = { 
  entityMetadata,
  pluralNames
};
