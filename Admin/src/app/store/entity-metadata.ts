import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  users: {},
  user_permissions: {},
  logs: {},
  teams: {},
  departments: {},
  media_objects: {},
  communes: {},
  edges: {},
  postes: {},
  missions: {},
  anomalies: {},
  visites: {},
  nodes: {},
  objectives: {},
  goal_groups: {},
  goals: {},
};

const pluralNames = { 
  users: 'users',
  user_permissions: 'user_permissions',
  logs: 'logs',
  teams: 'teams',
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
