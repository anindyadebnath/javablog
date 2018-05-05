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
      {name: 'description', content: 'public static <T> T requireNonNull (T obj) returns the object which is passed as param ' 
      + 'if object is not null. It is a very usefull method where we want to assign non null object.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'isNull,nonNull ,requireNonNull'}
    ]);
   }

  ngOnInit() {}
  }
