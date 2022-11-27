import { Team } from ".";

export interface User {
    id?: number;
    username?: string;
    password?: string;
    fullName?: string;
    roles? : string[];
    jwt?: any;
    team? : Team;
}
export interface UserPermissions {
    id?: number;
    role: string;
    label: string;
    permissions: string[];
}