import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-7-0';
import { LikerComponent } from './liker.component';

export default {
  title: 'CSF3 / Liker',
  component: LikerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
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
