import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomUsersComponent } from './chatroom-users.component';

describe('ChatroomUsersComponent', () => {
  let component: ChatroomUsersComponent;
  let fixture: ComponentFixture<ChatroomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatroomUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatroomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
