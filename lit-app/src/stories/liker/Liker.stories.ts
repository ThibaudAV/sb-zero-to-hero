import {Story, Meta} from '@storybook/web-components';
import {action} from '@storybook/addon-actions'
import {html} from 'lit';
import './Liker';

export default {
  title: 'Liker',
  argTypes: {
    likes: {type: 'number'},
    dislikes: {type: 'number'},
  }
} as Meta;

const Template: Story = ({likes, dislikes, onLike}) =>
  html`<my-liker .likes=${likes} .dislikes=${dislikes} @my-liker:like=${onLike}></my-liker>`;

export const Default = Template.bind({});
Default.args = {
  likes: 12,
  dislikes: 14,
  onLike: action('On like')
}

Default.play = (context) => {
  const button = context.canvasElement
    .querySelector('my-liker')
    ?.shadowRoot?.querySelector('#like') as HTMLButtonElement;
  button.click();
  button.click();
  button.click();
};
