import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liker',
  template: `
    <div>
      <button id="like" (click)="like()">Like</button>
      <button id="dislike" (click)="dislike()">Dislike</button>
      <p>{{ likes }} Likes - {{ dislikes }} Dislikes</p>
    </div>
  `,
})
export class LikerComponent {
  @Input()
  likes = 0;

  @Input()
  dislikes = 0;

  @Output()
  liked = new EventEmitter();

  @Output()
  disLiked = new EventEmitter();

  like() {
    this.likes++;
    this.liked.emit(this.likes);
  }

  dislike() {
    this.dislikes++;
    this.disLiked.emit(this.dislikes);
  }
}
