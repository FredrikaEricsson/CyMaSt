import { Post } from './Post';

export class Comment {
  id: number;
  content: string;
  postId: number;
  post: Post;

  constructor(id: number, content: string, postId: number, post: Post) {
    this.id = id;
    this.content = content;
    this.postId = postId;
    this.post = post;
  }
}
