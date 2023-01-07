import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

enum ButtonThemes {
  PRIMARY = "primary",
  GRAY = "gray",
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Primary Button",
};

export const Gray = Template.bind({});
Gray.args = {
  label: "Gray Button",
  theme: ButtonThemes.GRAY,
};
