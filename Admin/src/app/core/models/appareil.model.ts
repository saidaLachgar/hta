import { Departement, Poste } from ".";

export interface AppareilCoupeur {
    id?: number;
    titre?: string;
    departement?: Departement;
    postes?: Poste[];
}