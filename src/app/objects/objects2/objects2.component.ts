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
      {name: 'description', content: 'We have two sets of Employee, if we try to check the equality by calling Objects.deepEquals method'
       + ' It will ultimately call AbstractSet.equals method.'
       + 'Same for List also, AbstractList.equals method will be called.'},
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
