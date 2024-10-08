import { MenuItem } from '../models/menu.model';
export const MENU: MenuItem[] = [
    {
        id:1,
        label: 'Menu',
        isTitle: true
    },
    {
        id:2,
        label: 'Tableau de bord',
        icon: 'bx bx-home-circle',
        link: '/dashboard',
    },
    {
        id:3,
        label: 'Travaux',
        icon: 'fas fa-hard-hat',
        link: '/mission',
        checkPermissions: 'missions',
    },
    {
        id:4,
        label: 'Anomalies',
        link: '/anomalies',
        icon: 'bx bx-task',
        checkPermissions: 'anomalies',
    },
    {
        id:5,
        label: 'Visites',
        link: '/visites',
        icon: 'bx bx-walk',
        checkPermissions: 'visites',
    },
    {
        id:7,
        label: 'Objectifs de l\'année',
        icon: 'bx bx-bullseye',
        subItems: [
            {
                id:19,
                label: 'État du suivi',
                link: '/objectives',
                parentId: 7,
                checkPermissions: 'objectives',

            },
            {
                id:20,
                label: 'Objectifs',
                link: '/goals',
                parentId: 7,
                checkPermissions: 'goals',

            },
            {
                id:21,
                label: 'Groupe d\'objectifs',
                link: '/goal-group',
                parentId: 7,
                checkPermissions: 'goal_groups',

            },
        ]
    },
    {
        id:8,
        label: 'Postes de distribution',
        icon: 'fas fa-network-wired',
        link: '/postes',
        checkPermissions: 'postes',
    },
    {
        id:9,
        label: 'Statistiques',
        icon: 'bx bx-line-chart',
        link: '/statistiques',
        checkPermissions: 'statistiques',
    },
    {
        id:10,
        label: 'Utilisateurs',
        icon: 'bx bx-user',
        subItems: [
            {
                id:11,
                label: 'Équipes',
                link: '/teams',
                checkPermissions: 'teams',
                parentId: 10
            },
            {
                id:12,
                label: 'Members',
                link: '/users',
                checkPermissions: 'users',
                parentId: 10
            },
            {
                id:13,
                label: 'Autorisation',
                link: '/autorisation',
                checkPermissions: 'autorisation',
                parentId: 10
            },
            {
                id:14,
                label: 'Historique',
                link: '/historique',
                parentId: 10,
                checkPermissions: 'logs',
            }
        ]
    },
    {
        id:15,
        label: 'Source des données',
        icon: 'bx bx-cog',
        subItems: [
            {
                id:22,
                label: 'DP',
                link: '/dps',
                checkPermissions: 'dps',
                parentId: 15
            },
            {
                id:16,
                label: 'Départ',
                link: '/departments',
                checkPermissions: 'departments',
                parentId: 15
            },
            {
                id:17,
                label: 'Appareils coupure',
                link: '/nodes',
                checkPermissions: 'nodes',
                parentId: 15
            },
            {
                id:18,
                label: 'Tronçons',
                link: '/edges',
                checkPermissions: 'edges',
                parentId: 15
            },
            {
                id:18,
                label: 'Commune',
                link: '/communes',
                checkPermissions: 'communes',
                parentId: 15
            },

        ]
    },


];

