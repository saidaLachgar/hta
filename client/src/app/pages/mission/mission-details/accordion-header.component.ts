import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/core/models';
import { missionService } from '../mission.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-accordion-header',
    templateUrl: './accordion-header.component.html',
})
export class accordionHeaderComponent {
    @Input() child: boolean = false;
    @Input() mission: Mission;
    @Input() ngbPanelToggle: any;
    constructor(
        public service: missionService,
        public authService: AuthenticationService,
    ) { }
}
