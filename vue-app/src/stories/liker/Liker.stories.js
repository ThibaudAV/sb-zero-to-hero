import Liker from "./Liker.vue";
import { screen, userEvent } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
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

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Liker },
  // The story's `args` need to be mapped into the template through the `setup()` method
  methods: { onLike: action("onLike"), onDislikes: action("onDislikes") },
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
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
