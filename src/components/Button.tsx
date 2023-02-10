import React, {FC} from 'react';
import s from './OnOff/onoff.module.css'
type ButtonType = {
    style: string
    title: string
    callback: () => void
}
export const Button: FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div className={props.style}>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};
