import { Component, OnInit, NgModule, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['../pojo.component.css']
})
export class AddAttributeComponent implements OnInit {
  modifier = '';
  dataType = '';
  attName = '';
  getset = 'both';
  @Output() attCreated = new EventEmitter<{modifier: string, dataType: string, attName: string, getset: string}>();
  constructor() { }

  ngOnInit() {
  }
  show() {
    // console.log(this.modifier);
    this.attCreated.emit({modifier: this.modifier, dataType: this.dataType, attName: this.attName, getset: this.getset});
  }

  setRadio(str: string) {
    this.getset = str;
  }
}
