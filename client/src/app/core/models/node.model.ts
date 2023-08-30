import { Commune, Department, Poste } from ".";

export interface Node {
    id?: number;
    titre?: string;
    department?: Department;
    postes?: Poste[];
    commune?: Commune;
}