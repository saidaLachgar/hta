import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models';
import { UserService } from '../user.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  
  loading$: Observable<boolean>;
  errors$: Observable<any>;
  users$: Observable<User[]>;
  total$: Observable<number>;

  public hideSearch = true;

  constructor(public userService: UserService, private toast: HotToastService) { 
    this.users$ = new Observable;
    this.total$ = new Observable;
  }

  ngOnInit(): void {
    this.loading$ = this.userService.loading$;
    this.errors$ = this.userService.errors$;
    this.users$ = this.userService.getAll();
    this.total$ = this.userService.total$;
  }

  deleteItem(id:number, target:HTMLElement){
    this.userService.delete(id).pipe(
      this.toast.observe({
         loading: 'Suppression...',
         success: () => {
          target.closest("tr").remove();
          return 'Utilisateur supprimé avec succès';
         },
         error : 'un problème est survenu, veuillez réessayer'
      })
    ).subscribe();
  }

  // findLessons(
  //   courseId:number, filter = '', sortOrder = 'asc',
  //   pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {
  
  //   return this.http.get('/api/lessons', {
  //       params: new HttpParams()
  //           .set('courseId', courseId.toString())
  //           .set('filter', filter)
  //           .set('sortOrder', sortOrder)
  //           .set('pageNumber', pageNumber.toString())
  //           .set('pageSize', pageSize.toString())
  //   }).pipe(
  //       map(res =>  res["payload"])
  //   );
  // }

}
