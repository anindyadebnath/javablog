import { PrivacyComponent } from './privacy/privacy.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Component, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import {MediaMatcher, BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { BreakpointState } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  isMobile: boolean;
  title = 'app';
  observeSubscription: Subscription;
  titles = {'pojo' : 'Create Pojo',
            'objects' : 'Utility Methods of Objects',
            'lambda' : 'java lambda expression',
            'scp' : 'supplier-consumer-predicate',
            'interface' : 'Interface static and default method',
            'mRef' : 'Method Reference',
            'streamApi' : 'Stream API' };



  constructor(breakPointObserver: BreakpointObserver, public dialog: MatDialog , private titleService: Title) {
    this.observeSubscription = breakPointObserver.observe([Breakpoints.Web])
    .subscribe((result: BreakpointState) => {
      this.isMobile = !result.matches;
    });
  }

  openContactUs(): void {
    const dialogRef = this.dialog.open(ContactusComponent, {
      height: 'auto',
      width : '400px',
      hasBackdrop: true,
    });
  }
  ngOnDestroy(): void {
    this.observeSubscription.unsubscribe();
  }

  openAboutMe(): void {
    const dialogRef = this.dialog.open(AboutmeComponent, {
      height: '500px',
      width : '600px',
      hasBackdrop: true,
    });
  }

  openPrivacyPolicy(): void {
    const dialogRef = this.dialog.open(PrivacyComponent, {
      height: '580px',
      width : '800px',
      hasBackdrop: true,
    });
  }

  commingSoon(): void {
    const dialogRef = this.dialog.open(ComingsoonComponent, {
      height: 'auto',
      width : '400px',
      hasBackdrop: true,
    });
  }
}
