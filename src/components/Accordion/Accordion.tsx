import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle collapsed={props.collapsed} callback={props.callback} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    callback: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <>
            <h3 onClick={() => props.callback(!props.collapsed)}>{props.title}</h3>
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