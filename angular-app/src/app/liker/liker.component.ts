import { Component } from '@angular/core';

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
  likes = 0;
  dislikes = 0;

  like() {
    this.likes++;
  }

  dislike() {
    this.dislikes++;
  }
}
