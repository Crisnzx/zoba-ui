import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Textarea",
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Test",
};

export const DisabledPaste = Template.bind({});
DisabledPaste.args = {
  label: "Test",
  disablePaste: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Test",
  error: "This field is required",
};
