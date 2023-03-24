import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {OnOff} from "./OnOff";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

export const Switching = () => {
    return <UncontrolledOnOff/>
}



