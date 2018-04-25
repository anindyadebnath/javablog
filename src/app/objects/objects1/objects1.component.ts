import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-objects1',
  templateUrl: './objects1.component.html',
  styleUrls: ['../../app.component.css']
})
export class Objects1Component implements OnInit {

  openAngle = '<';
  closeAngle = '>';
  oC = '{';
  cC = '}';
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('How to use requireNonNull');
    this.meta.addTags([
      {name: 'description', content: 'Some new methods which are included in Objects class in java 8.'
       + ' All the methods are utility methods for operating on objects.'
       + 'Point to be remembered all methods are static.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'isNull,nonNull ,requireNonNull'}
    ]);
   }

  ngOnInit() {}
  }
