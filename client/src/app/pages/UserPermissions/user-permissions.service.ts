import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { UserPermissions } from "src/app/core/models";

@Injectable({
  providedIn: "root",
})
export class UserPermissionsService extends EntityCollectionServiceBase<UserPermissions> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super("user_permissions", serviceElementsFactory);
  }

}
