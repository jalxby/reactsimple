import React, {useState} from 'react';
import {useParams} from "react-router-dom";

type OnOffPropsType = {
    // on: boolean

    //setOnOff: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {


    const [onOff, setOnOff] = useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: onOff ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !onOff ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: onOff ? "green" : "red"
    }

    const setOnHandler = () => {
        setOnOff(true)
        setOnOff(true)
    }

    const setOffHandler = () => {
        setOnOff(false)
        setOnOff(false)
    }

    return (
        <>
            <div style={onStyle} onClick={setOnHandler}>on
            </div>
            <div style={offStyle} onClick={setOffHandler}>off
            </div>
            <div style={indicatorStyle}></div>
        </>
    );
};

