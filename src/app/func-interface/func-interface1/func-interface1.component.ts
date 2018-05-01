import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

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
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Functional Interface Supplier, Consumer, Predicate | Use of Consumer and Predicate with example');
    this.meta.addTags([
      {name: 'description', content: 'Supplier, Consumer and Predicate are most important Functional Interface in Java SE8.'
       + ' We will discuss each of them to know When and How to use in real life scenario.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'Supplier, java 8, Consumer, Predicate'}
    ]);
   }

  ngOnInit() {
  }

}
