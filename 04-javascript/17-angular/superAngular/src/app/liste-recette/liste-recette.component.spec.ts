import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecetteComponent } from './liste-recette.component';

describe('ListeRecetteComponent', () => {
  let component: ListeRecetteComponent;
  let fixture: ComponentFixture<ListeRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRecetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
