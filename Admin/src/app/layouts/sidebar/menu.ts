import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Menu',
        isTitle: true
    },
    {
        id: 2,
        label: 'Tableau de bord',
        icon: 'bx bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'Tâches',
        icon: 'bx bx-task',
        subItems: [
            {
                id: 4,
                label: 'Anomalies',
                link: '/tasks/list',
                parentId: 3
            },
            {
                id: 5,
                label: 'Visites',
                link: '/tasks/kanban',
                parentId: 3
            },
            {
                id: 6,
                label: 'Nouvelle visite',
                link: '/tasks/create',
                parentId: 3
            }
        ]
    },
    {
        id: 7,
        label: 'Travaux',
        icon: 'fas fa-hard-hat',
        link: '/calendar',
    },

    {
        id: 8,
        label: 'Calendrier',
        icon: 'bx bx-calendar',
        link: '/calendar',
    },
    {
        id: 9,
        label: 'Objectifs de l\'année',
        icon: 'bx bx-bullseye',
        link: '/calendar',
    },
    {
        id: 10,
        label: 'Postes',
        icon: 'fas fa-network-wired',
        link: '/postes',
    },
    {
        id: 11,
        label: 'Statistiques',
        icon: 'bx bx-line-chart',
        link: '/statistiques',
    },
    {
        id: 12,
        label: 'Utilisateurs',
        icon: 'bx bx-cog',
        subItems: [
            {
                id: 13,
                label: 'Équipes',
                link: '/user/team',
                parentId: 12
            },
            {
                id: 14,
                label: 'Members',
                link: '/users',
                parentId: 12
            },
            {
                id: 15,
                label: 'Historique',
                link: '/user/history',
                parentId: 12
            }
        ]
    },
    {
        id: 16,
        label: 'Source des données',
        icon: 'bx bx-cog',
    },
    
];

