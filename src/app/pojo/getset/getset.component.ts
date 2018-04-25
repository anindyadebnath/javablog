import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-getset',
  templateUrl: './getset.component.html',
  styleUrls: ['../pojo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GetsetComponent implements OnInit {
  @Input() att: {modifier: string, dataType: string, attName: string, attCapName: string, getset: string};

  openCurly = '{';
  closeCurly = '}';

  constructor() { }

  ngOnInit() {
  }

}
