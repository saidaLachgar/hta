import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/core/models';
import { missionService } from '../mission.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
    selector: '.app-mission-row',
    templateUrl: './mission-row.component.html',
})
export class missionRowComponent {
    @Input() child:boolean = false;
    @Input() item: Mission;
    @Input() searchDateStart;
    @Input() searchDateEnd;
    @Input() searchCauses;
    @Input() searchIFS;
    @Input() searchDMS;
    @Input() searchEND;

    constructor(
        public service: missionService,
        public authService: AuthenticationService,
      ) {}

    get rowspan(): number {
        return !this.service.hasSearch && this.item.children.length ? this.item.children.length + 1 : 1;
    }
}
