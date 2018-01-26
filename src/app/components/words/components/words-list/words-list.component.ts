import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MatDialog, MatDialogRef } from '@angular/material';

import * as words from '../../actions/words';
import { WordsListDialogComponent } from './words-list-dialog/words-list-dialog.component';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss']
})
export class WordsListComponent implements OnInit {
  selectWord: string;
  isLinear = true;
  words: Observable<any>;
  count = 0;
  pending: boolean;
  answers: any[] = [];

  constructor(private store: Store<any>,
              private mdDialog: MatDialog,
              private router: Router) {
    this.words = store.select('words').map(({data}) => {
      data.map(x => {
        this.answers.push(x.transfer);
      });
      return data;
    });
    store.select('words')
      .subscribe(x => {
        this.pending = x.pending;
      });
  }

  swapWord(min, max) {
    return Math.random() * (max - min) + min;
  }

  ngOnInit() {
    this.store.dispatch(new words.GetWords());
  }

  next(data) {
    if (data.transfer === this.selectWord) {
      this.count++;
    } else {
      if (this.count <= 0) {
        this.count = 0;
      } else {
        return this.count;
      }
    }
    let count;
    for (let i = 0; i < this.answers.length; i++) {
      let swap = Math.round(this.swapWord(0, this.answers.length - 1));
      count = this.answers[swap];
      this.answers[swap] = this.answers[i];
      this.answers[i] = count;
    }
  }

  finish(data) {
    if (data.transfer === this.selectWord) {
      this.count++;
    } else {
      if (this.count <= 0) {
        this.count = 0;
      } else {
        return this.count;
      }
    }
    const dialogRef: MatDialogRef<WordsListDialogComponent> = this.mdDialog.open(
      WordsListDialogComponent,
      {
        disableClose: false,
        panelClass: 'custom-overlay-pane-class',
        hasBackdrop: true,
        width: '80vw',
        height: '60vh',
        data: {
          message: this.count
        }
      });

    dialogRef.afterClosed()
      .subscribe(result => {
        this.router.navigate([ '/' ]);
      });
  }

}
