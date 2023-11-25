import { Node, Team } from ".";

export enum CausesList {"Défauts matériels","Tiers/corps étranger","Intempéries","Cause inconnue"};
export interface Mission {
    id?: number;
    dateStart?: string;
    dateEnd?: string;
    type?: boolean;
    causes?: number;
    nbClients?: string;
    nbPostes?: number;
    DMS?: number;
    IFS?: number;
    END?: number;
    rowspan?: number;
    total_anomalies?: number;
    undone_anomalies?: number;
    team?:Team;
    parent?:Mission;
    children?:Mission[];
    node_a?: Node;
    node_b?: Node[];
    actions?: string[];
}