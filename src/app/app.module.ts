import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PojoComponent } from './pojo/pojo.component';
import { AttributeComponent } from './pojo/attribute/attribute.component';
import { AddAttributeComponent } from './pojo/add-attribute/add-attribute.component';
import { GetsetComponent } from './pojo/getset/getset.component';
import { ObjectsComponent } from './objects/objects.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { Objects1Component } from './objects/objects1/objects1.component';
import { Objects2Component } from './objects/objects2/objects2.component';
import { HomeComponent } from './home/home.component';
import { LambdaComponent } from './lambda/lambda.component';
import { FuncInterfaceComponent } from './func-interface/func-interface.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FuncInterface1Component } from './func-interface/func-interface1/func-interface1.component';
import { InterfaceComponent } from './interface/interface.component';
import { MethodRefComponent } from './method-ref/method-ref.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MatToolbarModule, MatIconModule, MatSidenavContainer, MatSidenavModule, MatListModule, MatSnackBarModule,
  MatButtonModule, MatDialogContent, MAT_DIALOG_DEFAULT_OPTIONS, MatCardModule, MatMenuModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { StreamComponent } from './stream/stream.component';
const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'pojo' , component: PojoComponent},
  {path: 'objects' , component: ObjectsComponent},
  {path: 'objects/page/1' , component: Objects1Component},
  {path: 'objects/page/2' , component: Objects2Component},
  {path: 'lambda' , component: LambdaComponent},
  {path: 'supplier-consumer-predicate' , component: FuncInterfaceComponent},
  {path: 'supplier-consumer-predicate/page/1' , component: FuncInterface1Component},
  {path: 'interface' , component: InterfaceComponent},
  {path: 'method-reference' , component: MethodRefComponent},
  {path: 'stream-API' , component: StreamComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    PojoComponent,
    AttributeComponent,
    AddAttributeComponent,
    GetsetComponent,
    ObjectsComponent,
    Objects1Component,
    Objects2Component,
    HomeComponent,
    LambdaComponent,
    FuncInterfaceComponent,
    FuncInterface1Component,
    InterfaceComponent,
    MethodRefComponent,
    ContactusComponent,
    AboutmeComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    ],
  bootstrap: [AppComponent],
  entryComponents: [ContactusComponent, AboutmeComponent]
})
export class AppModule { }

