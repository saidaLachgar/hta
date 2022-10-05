import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserDataService extends DefaultDataService<User> {
  private server = environment.serverURL;

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('User', http, httpUrlGenerator);
  }

  override getAll(): Observable<User[]> {
    const getUrl =`${this.server}/api/users`;
    return this.http.get(getUrl).pipe(
      map((data: {[key: string]: any}) => {
        const user: User[] = [];
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            user.push({...element, id: key});
          }
        }
        return user;
      })
    );
  }
}
