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
    this.titleService.setTitle('Functional Interface Consumer with example | Functional Interface Predicate with example');
    this.meta.addTags([
      {name: 'description', content: 'Supplier, Consumer and Predicate | Return type of Consumer abstract method is void.'
       + ' Which means we can\'t return anything, we can only modify the object which is passed.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'Supplier, java 8, Consumer, Predicate'}
    ]);
   }

  ngOnInit() {
  }

}
