import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material';

import { WordsListDialogComponent } from './words-list-dialog.component';

describe('WordsListDialogComponent', () => {
  let component: WordsListDialogComponent;
  let fixture: ComponentFixture<WordsListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatStepperModule,
        MatRadioModule,
        MatDialogModule,
        MatProgressSpinnerModule,
      ],
      declarations: [ WordsListDialogComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
