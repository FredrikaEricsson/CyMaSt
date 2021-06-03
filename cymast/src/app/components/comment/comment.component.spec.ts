import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentComponent } from './comment.component';
import { Component } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

describe('CommentComponent', () => {
  let component: TestCommentComponent;
  let fixture: ComponentFixture<TestCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent, TestCommentComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have content', () => {
    expect(component.comment.content).toBe('My Post');
  });
  it('should display content', () => {
    let pTag: HTMLHeadingElement = fixture.nativeElement.querySelector('p');
    expect(pTag.innerText).toBe('My Post');
  });
});

@Component({
  template: `<app-comment [comment]="comment"></app-comment>`,
})
class TestCommentComponent {
  comment: Comment = {
    id: 1,
    content: 'My Post',
    postId: 1,
  };
}
