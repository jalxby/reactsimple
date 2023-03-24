import React from "react";

type AccordionPropsType = {
    titleValue: string
    /**
     * var that makes Accordion collapsed or not
     */
    collapsed: boolean
    callback: (collapsed: boolean) => void
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle collapsed={props.collapsed} callback={props.callback} title={props.titleValue}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    callback: (collapsed: boolean) => void
    collapsed: boolean
    /**
     * Color of AccordionTitle: Optional
     */
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <>
            <h3 style={{color: props.color ? props.color : 'black'}}
                onClick={() => props.callback(!props.collapsed)}>{props.title}</h3>
        </>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')

    return (
        <>
            <ul>
                {props.items.map((i, index) => <li onClick={() => {
                    props.onClick(i.value)
                }} key={index}>{i.title}</li>)}
            </ul>
        </>
    )
}