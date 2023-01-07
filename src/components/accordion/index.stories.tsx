import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Components/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  headerTitle: "This is a sample accordion",
  children: (
    <div>
      <h1>Accordion body</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt,
        laboriosam sit esse sunt in numquam quibusdam sint consectetur amet
        recusandae architecto aliquid deleniti aut ipsum minus enim qui
        corrupti!
      </p>
    </div>
  ),
};
