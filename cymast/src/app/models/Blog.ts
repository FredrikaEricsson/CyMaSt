import { Post } from './Post';

export class Blog {
  id: number;
  title: string;
  created: Date;
  userId: number;
  posts: Post[];

  constructor(
    id: number,
    title: string,
    created: Date,
    userId: number,
    posts: Post[]
  ) {
    this.id = id;
    this.title = title;
    this.created = created;
    this.userId = userId;
    this.posts = posts;
  }
}
