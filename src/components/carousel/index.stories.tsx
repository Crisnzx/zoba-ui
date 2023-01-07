import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel } from ".";
import { CarouselSampleItem } from "./carousel-sample-item";

const CAROUSEL_PAGE_BREAKPOINTS = [
  {
    minWidth: 0,
    itemsToShow: 1,
  },
  {
    minWidth: 600,
    itemsToShow: 2,
  },
  {
    minWidth: 650,
    itemsToShow: 3,
  },
  {
    minWidth: 730,
    itemsToShow: 4,
  },
  {
    minWidth: 1024,
    itemsToShow: 5,
  },
  {
    minWidth: 1450,
    itemsToShow: 6,
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Components/Carousel",
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  pageBreakpoints: CAROUSEL_PAGE_BREAKPOINTS,
  children: [1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
    <CarouselSampleItem
      key={value}
      onClick={() => {}}
      title="Sample"
      description="Lorem Ipsun"
    />
  )),
};
