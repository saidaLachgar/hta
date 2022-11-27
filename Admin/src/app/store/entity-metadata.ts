import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  users: {},
  user_permissions: {},
  logs: {},
  teams: {},
  departements: {},
  media_objects: {},
  communes: {},
};

const pluralNames = { 
  users: 'users',
  departements: 'departements',
  teams: 'teams',
  logs: 'logs',
  user_permissions: 'user_permissions',
  media_objects: 'media_objects',
  communes: 'communes',
 };

export const entityConfig: EntityDataModuleConfig = { 
  entityMetadata,
  pluralNames
};
