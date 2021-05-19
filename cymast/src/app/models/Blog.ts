export class Blog {
  id: number;
  title: string;
  created: Date;
  userId: number;
  posts: string[];

  constructor(
    id: number,
    title: string,
    created: Date,
    userId: number,
    posts: string[]
  ) {
    this.id = id;
    this.title = title;
    this.created = created;
    this.userId = userId;
    this.posts = posts;
  }
}
