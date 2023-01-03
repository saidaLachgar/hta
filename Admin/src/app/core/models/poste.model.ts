import { Departement, Commune, AppareilCoupeur } from ".";

export interface Poste {
    id?: number;
    designation?: string;
    departement?: Departement;
    MLE?: string;
    PKVA?: string;
    nb_clients?: number;
    commune?: Commune;
    date_mst?: string;
    appareilsCoupeur?: AppareilCoupeur[];
}