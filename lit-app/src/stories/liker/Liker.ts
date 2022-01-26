import {html, LitElement} from 'lit';
import { customElement } from 'lit/decorators';

@customElement('my-liker')
export class Liker extends LitElement {
  private likes = 0;
  private dislikes = 0;

  like() {
    this.likes++;
    this.requestUpdate();
  }

  dislike() {
    this.dislikes++;
    this.requestUpdate();
  }

  override render() {
    return html`<div>
      <button id="like" @click=${this.like}>Like</button>
      <button id="dislike" @click=${this.dislike}>Dislike</button>
      <p>${this.likes} Likes - ${this.dislikes} Dislikes</p>
    </div>`;
  }
}
