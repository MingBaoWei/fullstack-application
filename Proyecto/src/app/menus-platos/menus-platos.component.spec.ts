import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusPlatosComponent } from './menus-platos.component';

describe('MenusPlatosComponent', () => {
  let component: MenusPlatosComponent;
  let fixture: ComponentFixture<MenusPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenusPlatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenusPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
