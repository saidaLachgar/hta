import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  users: {},
  logs: {},
  user_permissions: {},
  media_objects: {},
  
  dps: {},
  teams: {},
  departments: {},
  communes: {},
  edges: {},
  nodes: {},
  postes: {},

  missions: {},
  anomalies: {},
  visites: {},
  
  objectives: {},
  goal_groups: {},
  goals: {},
};

const pluralNames = { 
  users: 'users',
  user_permissions: 'user_permissions',
  logs: 'logs',
  teams: 'teams',
  dps: 'dps',
  departments: 'departments',
  media_objects: 'media_objects',
  communes: 'communes',
  edges: 'edges',
  postes: 'postes',
  missions: 'missions',
  anomalies: 'anomalies',
  visites: 'visites',
  nodes: 'nodes',
  objectives: 'objectives',
  goal_groups: 'goal_groups',
  goals: 'goals',
 };

export const entityConfig: EntityDataModuleConfig = { 
  entityMetadata,
  pluralNames
};
