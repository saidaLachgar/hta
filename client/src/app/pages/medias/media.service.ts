import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { Observable } from "rxjs";
import { Media } from "src/app/core/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class mediasService extends EntityCollectionServiceBase<Media> {
  private server = environment.serverURL;
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
  ) {
    super("media_objects", serviceElementsFactory);
  }


  Upload(attachment:File) : Observable<any>{
    let url = `${this.server}/api/media_objects`;
    let body: FormData = new FormData();
    body.append("file", attachment, attachment.name);
    return this.http.post(
      url,
      body,
      {
        reportProgress: true,
        responseType: 'json'
      }
    ).pipe();
  }
}
