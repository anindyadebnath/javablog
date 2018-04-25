import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutmeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AboutmeComponent>) { }

  ngOnInit() {
  }
  public closeDialog() {
    this.dialogRef.close();
  }

}
