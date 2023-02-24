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
    { label: 'Élevé', value: 'ELEVE' },
    { label: 'Faible', value: 'FAIBLE' },
    { label: 'Normal', value: 'NORMAL' },
];
  