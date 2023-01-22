import { User } from "./user.model";

export interface Anomalie {
    id?: number;
    checked?: boolean,
    title?: string,
    createdBy?: string|User,
}