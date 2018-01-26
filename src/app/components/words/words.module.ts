import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WordsComponent } from './words.component';
import { WordsAddComponent } from './components/words-add/words-add.component';
import { WordsListComponent } from './components/words-list/words-list.component';
import { WordsRoutingModule } from './words-routing.module';
import { contacts } from './reducers/words';

import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { WordsService } from './words.service';
import { WordsEffects } from './effects/words';
import { WordsListDialogComponent } from './components/words-list/words-list-dialog/words-list-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WordsRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('words', contacts),
    EffectsModule.forFeature([WordsEffects]),
  ],
  declarations: [WordsComponent, WordsAddComponent, WordsListComponent, WordsListDialogComponent],
  providers: [WordsService],
  entryComponents: [WordsListDialogComponent]
})
export class WordsModule { }
