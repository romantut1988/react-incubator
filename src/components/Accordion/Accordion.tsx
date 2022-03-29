import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue?: string
    collapsed?: boolean
    onChange?: () => void
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * optional color oh header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log("AccordionTitle rendering")
    return <div>
        <AccordionTitle title={props.titleValue} color={props.color}
                        onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title?: string
    onChange?: () => void
    color?: string
}

function AccordionTitle({title, onChange, color}: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3
            style={{color: color ? color : 'black'}}
            onClick={(e) => onChange && onChange()}>--- {title} ---</h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        { props.items.map( ( i, index) => <li onClick={() => { props.onClick(i.value) } } key={index}> {i.title} </li>)}
        </ul>
}

