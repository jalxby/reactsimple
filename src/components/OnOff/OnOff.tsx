import React from 'react';
import {StyleType} from "../../App";

type OnOffPropsType = {
    // on: boolean

    setOnOff: (onOff: boolean) => void
    style: StyleType

}


export const OnOff = (props: OnOffPropsType) => {


    return (
        <div>
            <div style={props.style.onStyle} onClick={() => props.setOnOff(true)}>on
            </div>
            <div style={props.style.offStyle} onClick={() => props.setOnOff(false)}>off
            </div>
            <div style={props.style.indicatorStyle}></div>
        </div>
    );
};

