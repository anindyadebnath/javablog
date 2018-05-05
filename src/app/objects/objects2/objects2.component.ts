import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-objects2',
  templateUrl: './objects2.component.html',
  styleUrls: ['../../app.component.css']
})
export class Objects2Component implements OnInit {

  openAngle = '<';
  closeAngle = '>';
  oC = '{';
  cC = '}';
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('How to use deepEquals');
    this.meta.addTags([
      {name: 'description', content: 'public static boolean deepEquals (Object a,Object b) It first check if a==b and basic nullcheck'
       + ' if a and b both are object array it call\'s Array\'s deepEquals0 method'
       + 'if a and b both are not array of object or primitive data type, it calls data type\'s equals method'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'deepEquals, array equals, list equals, set equals'}
    ]);
   }

  ngOnInit() {
  }
// tslint:disable-next-line:use-life-cycle-interface
ngAfterViewInit() {
  console.log('ngAfterViewInit');
  window.scrollTo(0, 0);
}
}
