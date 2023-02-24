import { Team, Media } from ".";
export interface Department {
    id?: number;
    titre?: string;
    longueur?: number;
    visuel?: Media;
    team?: Team;
}