import React, {useReducer} from "react";
import {CollapsedAC, collapsedReducer} from "./CollapsedReducer";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    const [state, dispatchAccordionStateAction] = useReducer(collapsedReducer, {collapsed:false})

    const setCollapsedOnClick = () => {
        dispatchAccordionStateAction(CollapsedAC())
    }

    return (
        <div>
            <AccordionTitle callback={() => setCollapsedOnClick()} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <>
            <h3 onClick={props.callback}>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}