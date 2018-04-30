import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ConsolesizeService } from '../services/consolesize.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutmeComponent implements OnInit {
isMobile = false;
  constructor(public dialogRef: MatDialogRef<AboutmeComponent>, console: ConsolesizeService) {
    this.isMobile = console.isMobile;
   }

  ngOnInit() {
  }
  public closeDialog() {
    this.dialogRef.close();
  }

}
