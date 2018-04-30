import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PrivacyComponent> ) { }

  ngOnInit() {
  }
  public closeDialog() {
    this.dialogRef.close();
  }

}
