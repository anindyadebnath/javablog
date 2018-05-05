import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['../app.component.css']
})
export class InterfaceComponent implements OnInit {

  oA = '<';
  cA = '>';
  oC = '{';
  cC = '}';
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('java 8 Inteface, static and default method');
    this.meta.addTags([
      {name: 'description', content: 'Prior to java SE8, Defination of an Interface was Abstract type and to use'
       + ' it\'s behavior a class must has to implement. But in java SE8 default and static method may have their'
      + ' implementation in Interface defination.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'Inteface, static and default method, java 8, java 8 interface'}
    ]);
   }

  ngOnInit() {
  }

}
