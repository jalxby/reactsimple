import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    changeRating: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star changeRating={props.changeRating} value={1} selected={props.value > 0}/>
            <Star changeRating={props.changeRating} value={2} selected={props.value > 1}/>
            <Star changeRating={props.changeRating} value={3} selected={props.value > 2}/>
            <Star changeRating={props.changeRating} value={4} selected={props.value > 3}/>
            <Star changeRating={props.changeRating} value={5} selected={props.value > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    changeRating: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.changeRating(props.value)}>{props.selected ? <b>Star</b> : "Star"}</span>
}