import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './pagetitle.component.html',
})
export class PagetitleComponent implements OnInit {

  @Input() breadcrumbItems;
  @Input() title: string;
  @Input() Loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
