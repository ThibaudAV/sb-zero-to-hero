import React from "react";
import { screen, userEvent } from "@storybook/testing-library";

import { Liker } from "./Liker";

export default {
  title: "Liker",
  component: Liker,
  argTypes: { onLike: { action: "onLike" } },
};

const Template = (args) => <Liker {...args} />;

export const Default = Template.bind({});

Default.play = async () => {
  const likeBtn = screen.getByText("Like", {
    selector: "button",
  });

  await userEvent.click(likeBtn);

  const dislikeBtn = screen.getByText("Dislike", {
    selector: "button",
  });
  await userEvent.click(dislikeBtn);
  await userEvent.click(dislikeBtn);
  await userEvent.click(dislikeBtn);
};
