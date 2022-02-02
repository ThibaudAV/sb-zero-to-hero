import Liker from "./Liker.vue";
import { screen, userEvent } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";

export default {
  title: "Liker",
  component: Liker,
  argTypes: {
    likes: { control: "number" },
    dislikes: { control: "number" },
  },
  decorators: [
    () => ({
      template:
        '<div style="border: 2px solid pink; padding:2rem"><story/></div>',
    }),
  ],
};

const Template = (args) => ({
  components: { Liker },
  methods: { onLike: action("onLike"), onDislikes: action("onDislikes") },
  setup() {
    return { args };
  },
  template: '<liker v-bind="args" @onLike="onLike" @onDislikes="onDislikes" />',
});

export const Default = Template.bind({});

Default.play = async () => {
  const likeBtn = screen.getByText(/Like/, {
    selector: "button",
  });

  await userEvent.click(likeBtn);

  const dislikeBtn = screen.getByText(/Dislike/, {
    selector: "button",
  });
  await userEvent.click(dislikeBtn);
  await userEvent.click(dislikeBtn);
  await userEvent.click(dislikeBtn);
};
