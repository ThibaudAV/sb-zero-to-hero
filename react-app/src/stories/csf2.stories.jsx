import React from "react";

import { Button } from "./Button";

export default {
  title: "Button/CSF2",
  component: Button,
};

export const Basic = () => <Button />;

export const Primary = (args) => <Button {...args} />;
Primary.args = { primary: true };
