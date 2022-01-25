import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { LikerComponent } from './liker.component';

export default {
  title: 'Liker',
  component: LikerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});

Default.play = (context) => {
  const button = context.canvasElement.querySelector(
    '#like'
  ) as HTMLButtonElement;
  button.click();
  button.click();
  button.click();
};
