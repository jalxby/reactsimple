import {ComponentMeta} from '@storybook/react';
import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
    argTypes: {
        titleValue: {
            type: "string",
            description: "Title of accordion"
        }
    },

} as ComponentMeta<typeof UncontrolledAccordion>;

// const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion   {...args} />;

// export const Normal = Template.bind({});
//
// Normal.args = {
//     titleValue: "-----Menu-----"
// }
//
// export const Collapsed = Template.bind({});
//
// Collapsed.args = {
//      titleValue: "-----Menu-----"
// }

export const ModeCollapsedChanging = () => {
    return <UncontrolledAccordion titleValue={'--Menu--'}/>
}
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



