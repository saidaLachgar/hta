import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isVisible: string;
  isActive: string;
  today: Date = new Date();

  constructor(
    public authService: AuthenticationService,
  ) {
    
  }

  ngOnInit() {

    /**
     * horizontal-vertical layput set
     */
     const attribute = document.body.getAttribute('data-layout');
     const vertical = document.getElementById('layout-vertical');
     this.isVisible = attribute;
     vertical && vertical.setAttribute('checked', 'true');
     
  }

}
