import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostComponent } from './post.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreStub } from 'src/app/services/MockBlogService';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from 'src/app/models/Post';
import { Component } from '@angular/core';

describe('PostComponent', () => {
  let component: TestPostComponent;
  let fixture: ComponentFixture<TestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent, TestPostComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [{ provide: AngularFirestore, useValue: FireStoreStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a post title', () => {
    expect(component.post.title).toBe('Post1');
  });

  it('should present a post title', () => {
    let postTitle: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.postHeadline');
    expect(postTitle.innerText).toBe('Post1');
  });
});

@Component({
  template: `<app-post [post]="post"></app-post>`,
})
class TestPostComponent {
  post: Post = {
    id: 1,
    title: 'Post1',
    content: 'My Post',
    created: new Date(),
    modified: new Date(),
    blogId: 1,
    comments: [],
  };
}
