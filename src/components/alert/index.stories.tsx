import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Form/Alert",
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  type: "success",
  title: "Everything is working fine",
  description: "primary",
  onUnmountAlert: () => {},
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "Oopsss",
  description: "Something went wrong!",
  onUnmountAlert: () => {},
};
