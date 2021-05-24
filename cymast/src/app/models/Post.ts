import { Blog } from './Blog';

export class Post {
  id: number;
  title: string;
  content: string;
  created: Date;
  modified: Date;
  blogId: number;
  blog: Blog;
  comments: Comment[];

  constructor(
    id: number,
    title: string,
    content: string,
    created: Date,
    modified: Date,
    blogId: number,
    blog: Blog,
    comments: Comment[]
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created = created;
    this.modified = modified;
    this.blogId = blogId;
    this.blog = blog;
    this.comments = comments;
  }
}
