import { Node, Team } from ".";

export interface Visite {
    id?: number;
    date?: string;
    nbSupport?: number;
    team?:Team
    nbAnomalies?:number;
    node_a?: Node;
    node_b?: Node[];
}

