import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-words-list-dialog',
  templateUrl: './words-list-dialog.component.html',
  styleUrls: ['./words-list-dialog.component.scss']
})
export class WordsListDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<WordsListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              @Inject(DOCUMENT) doc: any) {
    dialog.afterOpen.subscribe(() => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
