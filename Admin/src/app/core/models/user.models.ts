export class User {
    id?: number;
    username?: string;
    password?: string;
    fullName?: string;
    roles? : string[];
    token?: string;
    // team? : string;
}
export class Group{
    id?: number;
    title: string;
    roles: string[];
}