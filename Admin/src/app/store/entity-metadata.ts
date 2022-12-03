import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  users: {},
  user_permissions: {},
  logs: {},
  teams: {},
  departements: {},
  media_objects: {},
  communes: {},
  postes: {},
  appareil_coupeurs: {},
};

const pluralNames = { 
  users: 'users',
  user_permissions: 'user_permissions',
  logs: 'logs',
  teams: 'teams',
  departements: 'departements',
  media_objects: 'media_objects',
  communes: 'communes',
  postes: 'postes',
  appareil_coupeurs: 'appareil_coupeurs',
 };

export const entityConfig: EntityDataModuleConfig = { 
  entityMetadata,
  pluralNames
};
