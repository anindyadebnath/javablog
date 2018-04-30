import { MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ComingsoonComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ComingsoonComponent> ) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
