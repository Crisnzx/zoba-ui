import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from ".";

enum TextStyles {
  TITLE1 = "title1",
  TITLE2 = "title2",
  TITLE3 = "title3",
  SUBTITLE1 = "subtitle1",
  SUBTITLE2 = "subtitle2",
  SUBTITLE3 = "subtitle3",
  TEXTP1 = "textp1",
  TEXTP2 = "textp2",
  SUBTEXTP1 = "subtextp1",
  SUBTEXTP2 = "subtextp2",
  MICROP1 = "microp1",
  MICROP2 = "microp2",
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Components/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  style: TextStyles.TITLE1,
  color: "#444",
  htmlTag: "h1",
  children: "This is a text",
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  style: TextStyles.SUBTITLE2,
  color: "#111",
  htmlTag: "h2",
  uppercase: true,
  children: "this is a uppercase text",
};
