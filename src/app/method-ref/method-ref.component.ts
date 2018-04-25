import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-method-ref',
  templateUrl: './method-ref.component.html',
  styleUrls: ['../app.component.css']
})
export class MethodRefComponent implements OnInit {
  oA = '<';
  cA = '>';
  oC = '{';
  cC = '}';
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Method Reference and uses');
    this.meta.addTags([
      {name: 'description', content: 'Method reference is very inetersting addition in Java 8. It has made Java more simple and concise.'
       + ' Like earlier we can refer an Object with same type, now we are allowed to pass method as argument'
      + ' which has same method signature and arguent type.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'Method Reference, java 8, java 8 Method Reference and uses'}
    ]);
   }

  ngOnInit() {
  }

}
