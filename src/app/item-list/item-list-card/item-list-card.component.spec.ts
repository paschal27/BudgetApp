import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListCardComponent } from './item-list-card.component';

describe('ItemListCardComponent', () => {
  let component: ItemListCardComponent;
  let fixture: ComponentFixture<ItemListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListCardComponent]
    });
    fixture = TestBed.createComponent(ItemListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
