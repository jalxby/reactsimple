import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

// const [onOff, setOnOff] = useState(false)

export default {
    title: 'OnOff stories',
    component: OnOff,
    argTypes: {
        setOnOff: {
            type: "function",
            description: 'Функция которая меняет стейт'
        },
        onOff: {
            type: "boolean",
            description: "Значение стейта",
            defaultValue: false,
            options: [false, true],
            control: {
                type: 'radio'
            }
        }

    },

} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff   {...args} />;



export const On = Template.bind({});

On.args = {
    setOnOff: action('clicked'),
    onOff: true

}

export const Off = Template.bind({});

Off.args = {
    setOnOff: action('clicked'),
    onOff: false

}
export const Switching = () => {
    let [onOff,setonOff]=useState<boolean>(false);
    return <OnOff onOff={onOff} setOnOff={setonOff}/>
}



