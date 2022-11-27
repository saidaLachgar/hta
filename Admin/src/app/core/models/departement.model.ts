import { Team, Media } from ".";
export interface Departement {
    id?: number;
    titre?: string;
    longueur?: number;
    visuel?: Media;
    team?: Team;
}