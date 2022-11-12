import { EntityAccess } from "../models";

export const EntitiesAccess:EntityAccess[] = [
    {
        name: "Anomalies",
        value: "anomalies",
        permissions: -1
    },
    {
        name: 'Travaux',
        value: 'travaux',
        permissions: -1
    },

    {
        name: 'Calendrier',
        value: 'calendrier',
        permissions: 4
    },
    {
        name: 'Objectifs de l\'année',
        value: 'objectifs',
        permissions: 4
    },
    {
        name: 'Postes',
        value: 'postes',
        permissions: -1
    },
    {
        name: 'Statistiques',
        value: 'statistiques',
        permissions: 4
    },
    {
        name: 'Équipes',
        value: 'equipes',
        permissions: [0, 1, 2, 3, 4]
    },
    {
        name: 'Members',
        value: 'users',
        permissions: [0, 1, 2, 3, 4]
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
    {
        name: 'Source des données',
        value: 'data',
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
]