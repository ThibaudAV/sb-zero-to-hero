import {Story, Meta} from '@storybook/web-components';
import {html} from 'lit';
import './Liker';

export default {
  title: 'Liker',
} as Meta;

const Template: Story = (args) => html`<my-liker></my-liker>`;

export const Default = Template.bind({});

Default.play = (context) => {
  const button = context.canvasElement
    .querySelector('my-liker')
    ?.shadowRoot?.querySelector('#like') as HTMLButtonElement;
  button.click();
  button.click();
  button.click();
};
