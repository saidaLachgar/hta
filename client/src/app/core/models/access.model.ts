export interface EntityAccess {
    name: string,
    value: string,
    related?: boolean,
    permissions: number | number[];
}