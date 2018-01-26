import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterTestingModule
} from '@angular/router/testing';

import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { words } from '../../reducers/words';

import { WordsEffects } from '../../effects/words';

import { WordsService } from '../../words.service';

import { WordsListComponent } from './words-list.component';

describe('WordsListComponent', () => {
  let component: WordsListComponent;
  let fixture: ComponentFixture<WordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        RouterTestingModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
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
      declarations: [ WordsListComponent ],
      providers: [WordsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
