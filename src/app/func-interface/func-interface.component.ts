import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-interface',
  templateUrl: './func-interface.component.html',
  styleUrls: ['../app.component.css']
})
export class FuncInterfaceComponent implements OnInit {

  oA = '<';
  cA = '>';
  oC = '{';
  cC = '}';
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    window.scrollTo(0, 0);
 }


}
