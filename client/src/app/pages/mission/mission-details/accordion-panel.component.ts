import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/core/models';
import { missionService } from '../mission.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-accordion-panel',
    templateUrl: './accordion-panel.component.html',
})
export class accordionPanelComponent {
    @Input() child: boolean = false;
    @Input() mission: Mission;

    constructor(
        public service: missionService,
        public authService: AuthenticationService,
    ) { }

    getCurrentEdge(item) {
        return {
            ANode: item.node_a["@id"],
            BNode: item.node_b.map((e) => e["@id"]),
            department: item.node_a.department["@id"],
            type: 'false'
        }
    }
}
