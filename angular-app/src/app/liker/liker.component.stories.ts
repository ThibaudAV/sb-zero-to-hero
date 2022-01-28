import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { LikerComponent } from './liker.component';

export default {
  title: 'Liker',
  component: LikerComponent,
  argTypes: {
    liked: { action: 'liked' },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story = (args: any) => {
  return {
    template:
      '<app-liker [likes]="likes" [dislikes]="dislikes" (liked)="liked($event)" (disLiked)="disLiked($event)"></app-liker>',
    props: {
      likes: args.likes,
      dislikes: args.dislikes,
      liked: args.liked,
      disLiked: action('disLiked'),
    },
  };
};

export const Default = Template.bind({});

Default.play = (context) => {
  const button = context.canvasElement.querySelector(
    '#like'
  ) as HTMLButtonElement;
  button.click();
  button.click();
  button.click();
};
