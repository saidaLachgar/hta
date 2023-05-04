import { Edge, User } from "./";

export interface Anomaly {
    id?: number;
    status?: boolean,
    severity?:string
    title?: string,
    createdBy?: string|User,
    createdAt?: string;
    edge?: Edge;
}

export const SEVERITY_OPTIONS = [
    { label: 'Urgent < mois', value: 'ELEVE', color: 'danger' },
    { label: 'Court terme < 1an', value: 'FAIBLE', color: 'warning' },
    { label: 'Faible terme > 1an', value: 'NORMAL', color: 'success' },
    { label: 'Autre', value: 'OTHER', color: 'info' },
];
  