import { Component } from '@angular/core';

import { CausesList, Travaux } from 'src/app/core/models';
import { travauxService } from '../travaux.service';
import { ActivatedRoute } from '@angular/router';
import { differenceInMilliseconds, format, setDefaultOptions } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { AuthenticationService } from 'src/app/core/services/auth.service';
setDefaultOptions({ locale: fr })

let parseDate = (date:string) => new Date(Date.parse(date))
@Component({
  selector: 'app-travaux-details',
  templateUrl: './travaux-details.component.html',
})
export class travauxDetailsComponent {
  travaux: Travaux;
  breadCrumbItems: Array<{}>;
  causesList = Object.keys(CausesList);


  constructor(
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    public service: travauxService
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => this.travaux = obj);
  }

  getDiff(date1, date2) : string|void{
    if(date1 && date2){
      let diff = differenceInMilliseconds(parseDate(date2), parseDate(date1));
      return format(new Date(diff), 'H:mm:ss');
    } 
  }
}
