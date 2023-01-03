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
        link: '/travaux',
    },
    {
        id:4,
        label: 'Anomalies',
        link: '/tasks/list',
        icon: 'bx bx-task',
    },
    {
        id:5,
        label: 'Visites',
        link: '/visites',
        icon: 'bx bx-walk',
        parentId: 3
    },
    {
        id:6,
        label: 'Calendrier',
        icon: 'bx bx-calendar',
        link: '/calendar',
    },
    {
        id:7,
        label: 'Objectifs de l\'année',
        icon: 'bx bx-bullseye',
        link: '/calendar',
    },
    {
        id:8,
        label: 'Postes de distribution',
        icon: 'fas fa-network-wired',
        link: '/postes',
    },
    {
        id:9,
        label: 'Statistiques',
        icon: 'bx bx-line-chart',
        link: '/statistiques',
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
                parentId: 10
            }
        ]
    },
    {
        id:15,
        label: 'Source des données',
        icon: 'bx bx-cog',
        subItems: [
            {
                id:16,
                label: 'Départements',
                link: '/departements',
                checkPermissions: 'departements',
                parentId: 15
            },
            {
                id:17,
                label: 'Appareils coupeur',
                link: '/appareils',
                checkPermissions: 'appareils',
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

