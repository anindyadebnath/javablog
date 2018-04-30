import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Injectable()
export class ConsolesizeService {

  isMobile = false;
  observeSubscription: Subscription;

  constructor(breakPointObserver: BreakpointObserver) {
    this.observeSubscription = breakPointObserver.observe([Breakpoints.Web])
    .subscribe((result: BreakpointState) => {
      this.isMobile = !result.matches;
    });
  }

}
