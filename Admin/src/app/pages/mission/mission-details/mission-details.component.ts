import { Component } from '@angular/core';

import { CausesList, Mission } from 'src/app/core/models';
import { missionService } from '../mission.service';
import { ActivatedRoute } from '@angular/router';
import { differenceInMilliseconds, format, setDefaultOptions } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { AuthenticationService } from 'src/app/core/services/auth.service';
setDefaultOptions({ locale: fr })

let parseDate = (date:string) => new Date(Date.parse(date))
@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
})
export class missionDetailsComponent {
  mission: Mission;
  currentEdge: any;
  breadCrumbItems: Array<{}>;
  causesList = Object.keys(CausesList);


  constructor(
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    public service: missionService
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => {
      this.mission = obj;
      this.currentEdge = {
        ANode: obj.node_a["@id"],
        BNode: obj.node_b["@id"],
        department: obj.node_a.department["@id"],
        type: 'false'
      }
    });
  }

  getDiff(date1, date2) : string|void{
    if(date1 && date2){
      let diff = differenceInMilliseconds(parseDate(date2), parseDate(date1));
      return format(new Date(diff), 'H:mm:ss');
    } 
  }
}
