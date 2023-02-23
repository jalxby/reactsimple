import React, {useState} from 'react';
import s from './App.module.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOffUncontrolled} from "./components/OnOff/OnOffUncontrolled";

export type StyleType = any

function App() {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const [onOff, setOnOff] = useState(false)
    const style = {
        onStyle: {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            padding: "2px",
            backgroundColor: onOff ? "green" : "white"

        },
        offStyle: {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            marginLeft: "5px",
            padding: "2px",
            backgroundColor: !onOff ? "red" : "white"
        },
        indicatorStyle: {
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            border: "1px solid black",
            display: "inline-block",
            marginLeft: "5px",
            backgroundColor: onOff ? "green" : "red"
        }
    }

    return (
        <div className={s.container}>
            {/*<OnOff setOnOff={setOnOff} style={style} />*/}
            <OnOffUncontrolled setOnOff={setOnOff}/> {onOff.toString()}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/**/}
            {/*<UncontrolledAccordion titleValue={"Menu1"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu2"}/>*/}
            {/**/}
            <UncontrolledRating/>

            {/*/!*<PageTitle title={'This is APP component'}/>*!/*/}
            {/*/!*<PageTitle title={'This is APP component2'}/>*!/*/}
            {/*/!*Article 1*!/*/}
            {/*/!*<Rating value={3}/>*!/*/}

            <Accordion titleValue={"Menu"} collapsed={isCollapsed} callback={setIsCollapsed}/>
            {/*<Accordion titleValue={"Menu2"} collapsed={false}/>*/}
            {/*Article 2*/}
            <Rating value={ratingValue} changeRating={setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<Button style={s.buttonOn} title={'on'} callback={() => {*/}
            {/*}}/>*/}
            {/*<Button style={s.buttonOff} title={'off'} callback={() => {*/}
            {/*}} />*/}
            {/*<Squares style={s.squareOn}/>*/}
            {/*<Squares style={s.squareOff}/>*/}
            {/*<Circle style={s.dotOff}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}


export default App;
