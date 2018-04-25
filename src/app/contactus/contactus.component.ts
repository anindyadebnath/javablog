import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactusComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactusComponent>) { }

  ngOnInit() {
  }
  public closeDialog() {
    this.dialogRef.close();
  }
}
