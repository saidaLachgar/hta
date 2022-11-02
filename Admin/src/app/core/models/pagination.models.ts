export interface Pagination {
    page: number;
    first: number;
    last: number;
    next: number;
    previous: number;
    totalRecords: number;
    startIndex: number;
    endIndex: number;
}