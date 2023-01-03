import { Departement, AppareilCoupeur, User } from ".";

export interface Travaux {
    id?: number;
    dateStart?: string;
    dateEnd?: string;
    type?: boolean;
    causes?: number;
    departement?: Departement;
    appareil?: AppareilCoupeur;
    ps?: AppareilCoupeur;
    anomalies?: Anomalie[];
}
export interface Anomalie {
    id?: number;
    checked?: boolean,
    title?: string,
    createdBy?: string|User,
    
}
