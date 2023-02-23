import React, {useState} from "react";

// type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating(props: any) {
    console.log('Rating rendering')

    const [value, setValue] = useState(0)


    return (
        <div>
            <Star callback={() => setValue(1)} selected={value > 0}/>
            <Star callback={() => setValue(2)} selected={value > 1}/>
            <Star callback={() => setValue(3)} selected={value > 2}/>
            <Star callback={() => setValue(4)} selected={value > 3}/>
            <Star callback={() => setValue(5)} selected={value > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    callback: () => void

}

function Star(props: StarPropsType) {

    return (
        <>
            {/*{props.selected && <span><b>Star</b></span>}*/}
            {/*{!props.selected && <span>Star</span>}*/}
            {<span onClick={
                props.callback
            }>{props.selected ? <b> star</b> : " star"}</span>}
        </>
    )
}

// if (props.selected) {
//     return <span onClick={props.callback}><b>Star</b></span>
// } else {
//     return <span onClick={props.callback}>Star</span>
// }