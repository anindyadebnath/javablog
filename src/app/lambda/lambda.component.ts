import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lambda',
  templateUrl: './lambda.component.html',
  styleUrls: ['../app.component.css']
})
export class LambdaComponent implements OnInit {

  oA = '<';
  cA = '>';
  oC = '{';
  cC = '}';

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Lambda -> Expression and syntax');
    this.meta.addTags([
      {name: 'description', content: 'The most important and known feature of Java 8 is Lambda. Lambda is a anonymous function. '
       + ' Lambda expression lets us to define a class with single method (abstract) in a very concise manner.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'lambda, java lambda, java 8, java 8 lambda'}
    ]);
   }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    window.scrollTo(0, 0);
 }

}
