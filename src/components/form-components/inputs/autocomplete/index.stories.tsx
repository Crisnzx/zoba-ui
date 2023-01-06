import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Option } from "@/helpers/form-types";

import { Autocomplete } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Autocomplete",
  component: Autocomplete,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Autocomplete>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

const options: Option[] = [
  {
    label: "First option",
    value: "first-option",
  },
  {
    label: "Second option",
    value: "second-option",
  },
];

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options,
};

export const DisabledPaste = Template.bind({});
DisabledPaste.args = {
  options,
  disablePaste: true,
};

export const Error = Template.bind({});
Error.args = {
  options,
  error: "This field is required",
};
