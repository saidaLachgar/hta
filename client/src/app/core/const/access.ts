import { EntityAccess } from "../models";

export const EntitiesAccess:EntityAccess[] = [
    {
        name: 'Travaux',
        value: 'missions',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: "Anomalies",
        value: "anomalies",
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Visites',
        value: 'visites',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Départ',
        value: 'departments',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Dps',
        value: 'dps',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Commune',
        value: 'communes',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Tronçon',
        value: 'edges',
        related : true,
        permissions: -1
    },
    {
        name: 'Postes',
        value: 'postes',
        related : true,
        permissions: -1
    },
    {
        name: 'Appareils coupure',
        value: 'nodes',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'État du suivi',
        value: 'objectives',
        permissions: [0, 1, 2, 4]
    },
    {
        name: 'Groupe d\'objectif',
        value: 'goal_groups',
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Objectives',
        value: 'goals',
        permissions: [0, 1, 2, 3, 4]
    },
   
    {
        name: 'Équipes',
        value: 'teams',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    
    {
        name: 'Members',
        value: 'users',
        related : true,
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Profile',
        value: 'profile',
        permissions: 0
    },
    {
        name: 'Statistiques',
        value: 'statistiques',
        related : true,
        permissions: 4
    },
    {
        name: 'Autorisation',
        value: 'autorisation',
        permissions: 4
    },
    {
        name: 'Historique',
        value: 'logs',
        permissions: 4
    },
];

export const PermissionsIndex = [ // has all checkboxes -> -1
    {name:'Modifier', value: 'update'}, // -> 0
    {name:'Supprimer', value: 'delete'}, // -> 1
    {name:'Ajouter', value: 'add'}, // -> 2
    {name:'Details', value: 'details'}, // -> 3
    {name:'Afficher', value: 'show'}, // -> 4
    {name:'Exporter', value: 'export'}, // -> 5
    {name:'Importer', value: 'import'}, // -> 6
    // {name:'Profile', value: 'profile'}, // -> 7
]