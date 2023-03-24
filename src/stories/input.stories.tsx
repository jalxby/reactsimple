import {ChangeEvent, useRef, useState} from "react";
import {v1} from "uuid";

export default {
    title: 'input',

}
type ListType = {
    id: string
    title: string
}
let list: ListType[] = [
    {id: v1(), title: 'Minsk'},
    {id: v1(), title: 'Gdansk'},
    {id: v1(), title: 'Grodno'}
]

export const UncontrolledInput = () => <input/>
export const GetValueByButtonPressUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)

    const onClick = () => {
        const val = ref.current as HTMLInputElement
        setValue(val.value)
    }
    return (
        <>
            <input ref={ref}/>
            <button onClick={onClick}>save</button>
            - actual value: {value}
        </>
    )
}
export const UncontrolledInputTrackValue = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actValue = e.currentTarget.value
        setValue(actValue)
    }

    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    )
}
export const ControlledInputWithFixedValue = () => <input value={'It-Incubator'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
       setParentValue(e.currentTarget.value)
    }
    const addToList = () => {
        list = [...list, {id: v1(), title: parentValue}]
        setParentValue('')
    }
    return (
        <>
            <input value={parentValue} onChange={onChange}/>
            <button onClick={addToList}>add to list</button>
        </>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
       setParentValue(e.currentTarget.checked)
    }
    return (

        <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(list[0].id)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
       setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            {
                list.map((l, i) => {
                    return (
                        <option value={l.id}>{l.title}</option>
                    )
                })
            }
        </select>
    )
}