import { Departement, AppareilCoupeur, Anomalie } from ".";

export enum CausesList {"Défauts matériels","Telescopare","Intenpaire","Cause inconnue"};
export interface Travaux {
    id?: number;
    dateStart?: string;
    dateEnd?: string;
    type?: boolean;
    causes?: number;
    nbClients?: string;
    DMS?: string;
    departement?: Departement;
    appareil?: AppareilCoupeur;
    ps?: AppareilCoupeur;
    anomalies?: Anomalie[];
}
