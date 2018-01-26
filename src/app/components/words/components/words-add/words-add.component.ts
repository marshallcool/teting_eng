import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/last';

import * as words from '../../actions/words';

@Component({
  selector: 'app-words-add',
  templateUrl: './words-add.component.html',
  styleUrls: ['./words-add.component.scss']
})
export class WordsAddComponent implements OnInit {
  public wordsForm: FormGroup;
  words: any[] = [];
  lastWords: any[];
  load = false;
  pending: boolean;
  countWords = 20;

  constructor(private _fb: FormBuilder, private store: Store<any>) {
    store.select('words')
      .subscribe(x => {
        this.pending = x.pending;
      });
  }

  ngOnInit() {
    this.store.dispatch(new words.GetWords());
    this.store.select('words')
      .map(data => data.data)
      .subscribe(word => {
        this.lastWords = word;
      });
    if (this.lastWords.length > 0) {
      this.load = true;
      this.wordsForm = this._fb.group({
        words: this._fb.array(
          this.lastWords.map(el => this._fb.group({
            word: this._fb.control(el.word),
            transfer: this._fb.control(el.transfer)
          }))
        )
      });
    } else {
      this.load = false;
      this.wordsForm = this._fb.group({
        words: this._fb.array([
          this.initWord(),
        ])
      });
    }
  }

  initWord() {
    return this._fb.group({
      word: ['', Validators.required],
      transfer: ['', Validators.required]
    });
  }

  addWord() {
    const control = <FormArray>this.wordsForm.controls['words'];
    control.push(this.initWord());
  }

  removeWord(i: number) {
    const control = <FormArray>this.wordsForm.controls['words'];
    control.removeAt(i);
  }

  save(model) {
    this.store.dispatch(new words.AddWords(model.value.words));
  }

}
