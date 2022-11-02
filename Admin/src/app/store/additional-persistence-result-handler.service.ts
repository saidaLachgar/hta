import { DefaultPersistenceResultHandler, EntityAction } from "@ngrx/data";
import { Action } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { Pagination } from "../core/models";

export class AdditionalPersistenceResultHandler extends DefaultPersistenceResultHandler {
    private readonly pageSize = environment.pageSize;
    private serializeHydra(response): Pagination {
        let getHydra = (key: string) => {
            let val = response["hydra:view"][key];
            return val ? parseInt(val.replace(/^\D+/g, "")) : null;
        };
        let page = getHydra("@id"),
            first = getHydra("hydra:first"),
            last = getHydra("hydra:last"),
            next = getHydra("hydra:next"),
            previous = getHydra("hydra:previous"),
            totalRecords = response["hydra:totalItems"];
        return {
            page: page,
            first: first,
            last: last,
            next: next,
            previous: previous,
            totalRecords: totalRecords,
            startIndex: page === 1 ? 1 : page * this.pageSize - this.pageSize,
            endIndex: page * this.pageSize > totalRecords ? totalRecords : page * this.pageSize
        }
    }

    handleSuccess(originalAction: EntityAction): (data: any) => Action {
        const actionHandler = super.handleSuccess(originalAction);
        const that = this;
        // return a factory to get a data handler to
        // parse data from DataService and save to action.payload
        return function (data: any) {
            const action = actionHandler.call(this, data);
            if (action && data && typeof data !== "number"  && "hydra:member" in data) {
                "hydra:view" in data && ((action as any).payload.pagination = that.serializeHydra(data));
                (action as any).payload.data = data["hydra:member"];
            }
            return action;
        };
    }
}