import { User, Departement } from ".";

export interface Team {
    id?: number;
    titre: string;
    departements: Departement[];
    membres: User[];
}