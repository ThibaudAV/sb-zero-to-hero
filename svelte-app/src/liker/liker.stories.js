import Liker from "./liker.svelte";
import BorderDecorator from "./BorderDecorator.svelte";

export default {
  title: "Liker",
  component: Liker,
  decorators: [() => BorderDecorator],
  argTypes: {
    onLike: { action: "onLike" },
    onDislike: { action: "onDislike" },
  },
};

const Template = ({ likes, dislikes, onLike, onDislike }) => ({
  Component: Liker,
  props: { likes, dislikes },
  on: { onLike, onDislike },
});

export const Default = Template.bind({});
Default.args = { likes: 30 };
