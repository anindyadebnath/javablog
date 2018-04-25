import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-interface1',
  templateUrl: './func-interface1.component.html',
  styleUrls: ['../../app.component.css']
})
export class FuncInterface1Component implements OnInit {

  oA = '<';
  cA = '>';
  oC = '{';
  cC = '}';
  constructor() { }

  ngOnInit() {
  }

}
