import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Switch } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Form/Switch",
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <p>This is the primary Switch storie</p>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <p>Disabled Switch</p>,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  children: <p>Switch with Error</p>,
  error: "This field is required",
};
