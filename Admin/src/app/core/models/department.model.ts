import { Team, Media } from ".";
export interface Department {
    id?: number;
    titre?: string;
    longueur?: number;
    courantMax?: number;
    visuel?: Media;
    team?: Team;
}