import { BehaviorSubject, Subject } from 'rxjs';
import { Blog } from '../models/Blog';

export class MockBlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor() {}

  blogsData: Blog[] = [
    { id: 1, title: 'Blog1', created: null, userId: 9304044, posts: [] },
    { id: 2, title: 'Blog2', created: null, userId: 9304044, posts: [] },
    { id: 3, title: 'Blog3', created: null, userId: 9304044, posts: [] },
    { id: 4, title: 'Blog4', created: null, userId: 9304044, posts: [] },
  ];

  getBlogs(): void {
    this.blogs.next(this.blogsData);
  }
}

export class FireStoreStub {
  FireStoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
    }),
  };
}
