import { Department, Node } from ".";
export interface Edge {
    id?: number;
    titre?: string;
    department?: Department;
    node_a?: Node;
    node_b?: Node;
}