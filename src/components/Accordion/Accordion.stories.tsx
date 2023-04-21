import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import React, { useState } from "react";

export default {
  titleValue: "Accordion stories",
  component: Accordion,
  argTypes: {
    items: {
      defaultValue: [
        { title: "Dimych", value: 1 },
        { title: "Alex", value: 2 },
        { title: "Bob", value: 3 },
      ],
    },
    titleValue: {
      type: "string",
      description: "Title of accordion",
      defaultValue: "-----Menu-----",
    },
    collapsed: {
      type: "boolean",
      // description: "is collapsed or not",
      defaultValue: false,
      options: [false, true],
      control: {
        type: "radio",
      },
    },
    callback: {
      type: "function",
      description: "Set collapsed or not",
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

const callbackProps = {
  callback: action("clicked"),
  onClick: (id: any) => action(`${id} should be happy!`),
};

export const Normal = Template.bind({});

Normal.args = {
  ...callbackProps,
  collapsed: false,
};

export const Collapsed = Template.bind({});

Collapsed.args = {
  ...callbackProps,
  collapsed: true,
};

export const ModeCollapsedChanging: ComponentStory<typeof Accordion> = (
  args
) => {
  let [onOff, setonOff] = useState<boolean>(false);
  console.log("args", { ...args });
  const onClick = (id: any) => {
    console.log(`${id} should be happy!`);
  };
  return (
    <Accordion
      {...args}
      callback={setonOff}
      collapsed={onOff}
      onClick={onClick}
    />
  );
};
ModeCollapsedChanging.args = {
  ...callbackProps,
  color: "Red",
  // onClick: action(`$should be happy!`)
};
// export const Off = Template.bind({});
//
// Off.args = {
//     setOnOff: action('clicked'),
//     onOff: false
//
// }
// export const Switching = () => {
//     let [onOff,setonOff]=useState<boolean>(false);
//     return <OnOff onOff={onOff} setOnOff={setonOff}/>
// }
