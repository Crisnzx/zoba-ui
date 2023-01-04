import React from "react";

import { Switch } from "../components/form-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Switch",
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Switch {...args} />;

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
