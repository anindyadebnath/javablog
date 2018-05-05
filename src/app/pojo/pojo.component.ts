import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pojo',
  templateUrl: './pojo.component.html',
  styleUrls: ['./pojo.component.css']
})
export class PojoComponent implements OnInit {

  attributes = [{modifier: '', dataType: '', attName: '', attCapName : '', getset: '', isChecked: false}];
  constructorParams = [{dataType: '', attName: '', isSelected: ''}];
  paramset = [];
  dConstructor = false;
  pConstructor = false;
  className = 'Sample';
  openCurly = '{';
  closeCurly = '}';
  paramsForConstructor = '';
  paramsForConstructorList = [{params: [{dataType: '', attName: '', isSelected: ''}] , paramsForConstructor: ''}];
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Create pojo online');
    this.meta.addTags([
      {name: 'description', content: 'Create Pojo is single page java Pojo creater. Any one can easily create a pojo and'
       + ' copy paste the code in any code editor.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'java, online pojo creater, create pojo, java pojo'}
    ]);
   }

  ngOnInit() {
  }

  addAttribute(attData: {modifier: string, dataType: string, attName: string, getset: string}) {
    // console.log('Added');
    this.attributes.forEach(element => {
      if ((attData.attName !== '') && (attData.dataType !== '') && (attData.modifier !== '')
      && !this.isExistAtt(attData.attName)) {
        console.log(attData.attName.charAt(0).toUpperCase() + attData.attName.substring(1));
        this.attributes.push({
          modifier: attData.modifier,
          dataType: attData.dataType,
          attName: attData.attName,
          attCapName: attData.attName.charAt(0).toUpperCase() + attData.attName.substring(1),
          getset: attData.getset,
          isChecked: false
        });
      }
    });
  }

   isExistAtt(str: string): boolean {
    let isExist = false;
    this.attributes.forEach(elt => {
      if (elt.attName === str) {
         isExist = true ;
      }
    });
    return isExist;
  }

  isExistParam(str: string): boolean {
    let isExist = false;
    this.paramset.forEach(elt => {
      if (elt === str) {
         isExist = true ;
      }
    });
    return isExist;
  }

  setDConstructor() {
    (this.dConstructor === true) ? this.dConstructor = false : this.dConstructor = true;
  }

  onParamConstructor() {
    if (this.pConstructor === true) {
      this.pConstructor = false;
    } else {

       this.pConstructor = true;
    }
  }
  onSetParamConstructor(event: Event) {
    const param = (<HTMLInputElement>event.target).value;
    let dType = '';
    // console.log(param);
    if (!this.isExistParam(param)) {
      this.paramset.push(param);
      this.attributes.forEach(elt => {
        if (elt.attName === param) {
          dType = elt.dataType;
          elt.isChecked = true;
        }
      });
      this.constructorParams.push({dataType: dType, attName: param , isSelected: 'Y'});
      // console.log('adding' + this.constructorParams.length);
    } else {
      this.constructorParams.forEach(elt => {
        if (elt.attName === param) {
          if (elt.isSelected === 'Y') {
            elt.isSelected = 'N';
            this.attributes.forEach( elt1 => {
              if (elt1.attName === param) {
                elt1.isChecked = false;
              }
            });
          } else {
            elt.isSelected = 'Y';
            this.attributes.forEach( elt1 => {
              if (elt1.attName === param) {
                elt1.isChecked = true;
              }
            });
          }
        }
      });
      // console.log('removing' + this.constructorParams.length);
    }
  }

  createParamConstructor() {
    this.paramsForConstructor = '';
      this.constructorParams.forEach(elt => {
        if (elt.isSelected === 'Y') {
          this.paramsForConstructor = this.paramsForConstructor + ' ' + elt.dataType + ' ' + elt.attName + ',';
        }
      });
      if (this.paramsForConstructor.length > 3) {
        const l = this.paramsForConstructor.length;
        this.paramsForConstructor = this.paramsForConstructor.substring(0,  (l - 1));
      }
      const x = this.constructorParams;
      this.constructorParams = [];
      this.paramset = [];
      this.attributes.forEach(att => {
        att.isChecked = false;
      });
      this.paramsForConstructorList.push({
        params: x,
        paramsForConstructor: this.paramsForConstructor
      });
  }
}
