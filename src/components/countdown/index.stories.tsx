import React, { useRef, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Countdown, CountdownRef } from ".";
import classNames from "classnames";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZobaUI/Components/Countdown",
  component: Countdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Countdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
);

export const Primary = () => {
  const countdownRef = useRef<CountdownRef>(null);

  return (
    <Countdown
      ref={countdownRef}
      className={classNames("z-countdown", {
        "z-countdown--disabled": false,
      })}
      timeInSeconds={80}
      format="mm:ss"
      running={true}
      onFinish={() => countdownRef.current!.restart()}
    />
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
