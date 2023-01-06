import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PinInput } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Form/PinInput",
  component: PinInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PinInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PinInput> = (args) => (
  <PinInput {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const GreaterLength = Template.bind({});
GreaterLength.args = {
  length: 10,
};

export const ShowNumbers = Template.bind({});
ShowNumbers.args = {
  showNumbers: true,
};

export const Error = Template.bind({});
Error.args = {
  error: "This field is required",
};
