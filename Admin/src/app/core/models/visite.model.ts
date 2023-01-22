import { AppareilCoupeur, Departement, Team } from ".";

export interface Visite {
    id?: number;
    date?: string;
    departement?: Departement;
    source?: AppareilCoupeur;
    destination?: AppareilCoupeur;
    nbSupport?: number;
    team?:Team
    nbAnomalies?:number;
}

