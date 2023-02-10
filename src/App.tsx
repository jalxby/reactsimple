import React from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import Squares from "./components/OnOff/Squares";
import Circle from "./components/OnOff/Circle";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log('App rendering')
    return (
        <div className={s.container}>

                {/*/!*<PageTitle title={'This is APP component'}/>*!/*/}
                {/*/!*<PageTitle title={'This is APP component2'}/>*!/*/}
                {/*/!*Article 1*!/*/}
                {/*/!*<Rating value={3}/>*!/*/}

                <Accordion titleValue={"Menu"} collapsed={false}/>
                <Accordion titleValue={"Menu2"} collapsed={false}/>
                {/*Article 2*/}
                {/*<Rating value={0}/>*/}
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
