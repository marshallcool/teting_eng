import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsListDialogComponent } from './words-list-dialog.component';

describe('WordsListDialogComponent', () => {
  let component: WordsListDialogComponent;
  let fixture: ComponentFixture<WordsListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsListDialogComponent ]
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
