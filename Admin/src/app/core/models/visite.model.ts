import { Node, Team } from ".";

export interface Visite {
    id?: number;
    date?: string;
    nbSupport?: number;
    team?:Team
    nbAnomalies?:number;
    total_anomalies?: number;
    edge_set_length?: number;
    undone_anomalies?: number;
    node_a?: Node;
    node_b?: Node[];
}

