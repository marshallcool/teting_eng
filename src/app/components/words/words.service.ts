import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WordsService {
  words: any[] = [];

  getWords() {
    return Observable.timer(3000)
      .mapTo(this.words || [{}]);
  }

  addWords( data ) {
    this.words = [...data];
    return Observable.timer(2000)
      .mapTo({word: data.word, transfer: data.transfer});
  }

}
