import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderNameComponent } from './folder-name.component';

describe('FolderNameComponent', () => {
  let component: FolderNameComponent;
  let fixture: ComponentFixture<FolderNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
