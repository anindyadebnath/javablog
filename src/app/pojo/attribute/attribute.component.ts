import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['../pojo.component.css']
})
export class AttributeComponent implements OnInit {
  code = '';
  @Input() att: {modifier: string, dataType: string, attName: string, attCapName: string, getset: string};
  constructor() {
    this.code = '// Some code...';
  }

  ngOnInit() {
  }

}
