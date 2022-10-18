// interface HydraEntity {
//     '@id'?: string;
//     '@type'?: string;
//     '@context'?: string;
//     "hydra:member"?: any;
//     "hydra:totalItems"?:number;
//     "hydra:view"?:HydraView;
//     "hydra:search"?: any;
// }

export interface User {
    id?: number;
    username?: string;
    password?: string;
    fullName?: string;
    roles? : string[];
    token?: string;
    // team? : string;
}
export interface Group {
    id?: number;
    title: string;
    roles: string[];
}