import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { User } from 'src/app/core/models';


@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<User> {

  constructor(private serviceElementsFactory: EntityCollectionServiceElementsFactory) { 
    super('User', serviceElementsFactory);
  }
}
