import { User, Department } from ".";

export interface Team {
    id?: number;
    titre: string;
    departments: Department[];
    membres: User[];
}