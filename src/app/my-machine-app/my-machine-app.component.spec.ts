import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMachineAppComponent } from './my-machine-app.component';

describe('MyMachineAppComponent', () => {
  let component: MyMachineAppComponent;
  let fixture: ComponentFixture<MyMachineAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMachineAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyMachineAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
