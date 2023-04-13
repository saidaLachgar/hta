import { Node } from ".";

export enum CausesList {"Défauts matériels","Telescopare","Intenpaire","Cause inconnue"};
export interface Mission {
    id?: number;
    dateStart?: string;
    dateEnd?: string;
    type?: boolean;
    causes?: number;
    nbClients?: string;
    DMS?: string;
    rowspan?: number;
    node_a?: Node;
    node_b?: Node[];
    actions?: string[];
}