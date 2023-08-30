import { User } from "./user.model";

export interface Log {
    id?: number;
    message: string;
    extra: string[];
    createdAt: string;
    user: User;
}