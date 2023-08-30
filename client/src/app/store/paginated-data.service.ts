import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, QueryParams, DefaultDataServiceFactory, EntityCollectionDataService } from "@ngrx/data";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Optional } from "@angular/core";
import { map, tap } from "rxjs/operators";

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
/**
 * DataService class that handles Symfony REST Framework's paginated
 * responses.
 */
export class PaginatedDataService<T> extends DefaultDataService<T> {
    private readonly pageSize = 30;
    private pagination: Pagination;
    private patchValue(patch: Partial<Pagination>) {
        Object.assign(this.pagination, patch);
    }
    private getValues(response){
        let getHydra = (key: string) => {
            let val = response["hydra:view"][key];
            return val ? parseInt(val.replace(/^\D+/g, "")) : null;
        },
            page = getHydra("@id"),
            first = getHydra("hydra:first"),
            last = getHydra("hydra:last"),
            next = getHydra("hydra:next"),
            previous = getHydra("hydra:previous"),
            totalRecords = response["hydra:totalItems"];
        this.patchValue({
            page: page,
            first: first,
            last: last,
            next: next,
            previous: previous,
            totalRecords: totalRecords,
            startIndex: page === 1 ? 1 : page * this.pageSize - this.pageSize,
            endIndex: page * this.pageSize > totalRecords ? totalRecords : page * this.pageSize
        });
    }

    constructor(
        entityName: string,
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        config?: DefaultDataServiceConfig
    ) {
        super(entityName, http, httpUrlGenerator, config);
        this.pagination = {
            page: 1,
            first: null,
            last: null,
            next: null,
            previous: null,
            totalRecords: null,
            startIndex: null,
            endIndex: null,
        };
    }

    // Override to store nextUrl as well as map response.results.
    getAll(): Observable<T[]> {
        return this.execute('GET', this.entitiesUrl)
        // .pipe(
        //     tap(response => this.getValues(response)),
        //     map(response => response["hydra:member"])
        // );
    }

    // Override to store nextUrl as well as map response.results.
    getWithQuery(queryParams: QueryParams | string): Observable<T[]> {
        const qParams =
            typeof queryParams === 'string'
                ? { fromString: queryParams }
                : { fromObject: queryParams };
        const params = new HttpParams(qParams);
        return this.execute('GET', this.entitiesUrl, undefined, { params }).pipe(
            tap(response => this.getValues(response)),
            map(response => response.results)
        );
    }

    /**
     * Get next page of results. Or empty array if remote data is
     * exhausted.
     */
    // getMore(): Observable<T[]> {
    //     if (!this.hasMore()) {
    //         // or throwError?
    //         return of([]);
    //     }

    //     return this.execute('GET', this.nextPage).pipe(
    //         tap(response => {
    //             this.nextPage = response.next;
    //             this.count = response.count;
    //         }),
    //         map(response => response.results)
    //     );
    // }


    /**
     * Returns boolean indicating if there's more data at server.
     */
    // hasMore(): boolean {
    //     return !!this.nextPage;
    // }

    getPagination(): Pagination {
        return this.pagination;
    }
}


/**
 * Custom DataServiceFactory that creates PaginatedDataService<T>,
 * instead of the DefaultDataService<T>
 */
@Injectable()
export class CustomDataServiceFactory extends DefaultDataServiceFactory {
    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        @Optional() config?: DefaultDataServiceConfig
    ) {
        super(http, httpUrlGenerator, config);
    }

    /**
     * Create a default {EntityCollectionDataService} for the given entity type
     * @param entityName Name of the entity type for this data service
     */
    create<T>(entityName: string): EntityCollectionDataService<T> {
        return new PaginatedDataService<T>(
            entityName,
            this.http,
            this.httpUrlGenerator,
            this.config
        );
    }
}