import { Commune, Department, Node } from ".";
export interface Edge {
    id?: number;
    department?: Department;
    node_a?: Node;
    node_b?: Node;
    section?:number;
    longueur?:number;
    marque?:string;
    commune?: Commune;
}