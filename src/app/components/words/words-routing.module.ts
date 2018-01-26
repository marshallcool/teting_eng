import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordsAddComponent } from './components/words-add/words-add.component';
import { WordsListComponent } from './components/words-list/words-list.component';
import { WordsComponent } from './words.component';

const routes: Routes = [
  {
    path: '',
    component: WordsComponent,
    children: [
      { path: '', redirectTo: 'words-add', pathMatch: 'full' },
      {
        path: 'words-add',
        component: WordsAddComponent,
      },
      {
        path: 'words-list',
        component: WordsListComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { }
