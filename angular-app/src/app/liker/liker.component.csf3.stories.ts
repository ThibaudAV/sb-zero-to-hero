import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-7-0';
import { LikerComponent } from './liker.component';

export default {
  title: 'CSF3 / Liker',
  component: LikerComponent,
  argTypes: {
    liked: { action: 'liked' },
    disLiked: { action: 'disLiked' },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
  render: (args) => ({
    props: args,
  }),
} as Meta;

export const Default: Story = {
  play: (context) => {
    const button = context.canvasElement.querySelector(
      '#like'
    ) as HTMLButtonElement;
    button.click();
    button.click();
    button.click();
  },
};
export const Template: Story = {
  render: (args: any) => ({
    template:
      '<app-liker [likes]="likes" [dislikes]="dislikes" (liked)="liked($event)" (disLiked)="disLiked($event)"></app-liker>',
    props: args,
  }),
};
