import React from 'react';
import {useParams} from "react-router-dom";

type OnOffPropsType = {
    onOff: boolean

    setOnOff: (onOff: boolean) => void

}

export const OnOff = (props: OnOffPropsType) => {
    const params = useParams()
    const some = params
    console.log(some)
    const style = {
        onStyle: {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            padding: "2px",
            backgroundColor: props.onOff ? "green" : "white"

        },
        offStyle: {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            marginLeft: "5px",
            padding: "2px",
            backgroundColor: !props.onOff ? "red" : "white"
        },
        indicatorStyle: {
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            border: "1px solid black",
            display: "inline-block",
            marginLeft: "5px",
            backgroundColor: props.onOff ? "green" : "red"
        }
    }
    return (
        <div>
            <div style={style.onStyle} onClick={() => props.setOnOff(true)}>on
            </div>
            <div style={style.offStyle} onClick={() => props.setOnOff(false)}>off
            </div>
            <div style={style.indicatorStyle}></div>
        </div>
    );
};

