export class Comment {
  name: string;
  time: Date;
  comment: string;

  constructor(name: string, time: Date, comment: string) {
    this.name = name;
    this.time = time;
    this.comment = comment;
  }
}
