import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { words } from '../../reducers/words';

import { WordsEffects } from '../../effects/words';

import { WordsService } from '../../words.service';

import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { WordsAddComponent } from './words-add.component';

describe('WordsAddComponent', () => {
  let component: WordsAddComponent;
  let fixture: ComponentFixture<WordsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatStepperModule,
        MatRadioModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('words', words),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([WordsEffects]),
        BrowserAnimationsModule
      ],
      declarations: [ WordsAddComponent ],
      providers: [WordsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
