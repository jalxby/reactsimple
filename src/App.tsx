import React, {useState} from 'react';
import s from './App.module.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {NavLink, Route, Routes} from "react-router-dom";

export type StyleType = any

function App() {

    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const [onOff, setOnOff] = useState<boolean>(true)

    return (
        <div className={s.container}>
            <NavLink to={'/'}><h2>Menu:</h2>
                <NavLink to={'/onOff'}>
                    <div>OnOff</div>
                </NavLink>
                <NavLink to={'/onOff/1/2'}>
                    <div>OnOff with params</div>
                </NavLink>
                <NavLink to={'/onOff/uncontrolledOnOff'}>
                    <div>UncontrolledOnOff</div>
                </NavLink>
                <NavLink to={'/rating'}>
                    <div>Rating</div>
                </NavLink>
                <NavLink to={'/rating/uncontrolledRating'}>
                    <div>UncontrolledRating</div>
                </NavLink>
                <NavLink to={'/Accordion'}>
                    <div>Accordion</div>
                </NavLink>
            </NavLink>
            <Routes>
                <Route path={'/*'} element={<h3>404</h3>}/>
                <Route path={'/'}/>
                <Route path={'/onOff/*'} element={(
                    <div>
                        <OnOff setOnOff={setOnOff} onOff={onOff}/>
                        <Routes>
                            <Route path={'*'} element={<div>uncontrolledOnOff not found</div>}/>
                            <Route index element={<div>index element</div>}/>
                            <Route path={':id/:id'} element={<div>id</div>}/>
                            <Route path={'/uncontrolledOnOff/'} element={<UncontrolledOnOff/>}/>
                        </Routes>
                    </div>
                )}/>
                <Route path={'/rating/*'} element={(
                    <div>
                        <Rating value={ratingValue} changeRating={setRatingValue}/>
                        <Routes>
                            <Route path={'/uncontrolledRating'} element={<UncontrolledRating/>}/>
                        </Routes>
                    </div>
                )}/>
                <Route path={'/Accordion'}
                       element={
                           <Accordion
                               titleValue={"Menu"}
                               collapsed={isCollapsed}
                               callback={setIsCollapsed}
                               items={[
                                   {title:'Dimych',value:1},
                                   {title:'Alex',value:2},
                                   {title:'Bob',value:3},
                               ]}
                               onClick={()=>{}}
                           />
                       }/>
            </Routes>
            {/*<OnOff/>*/}
            {/**/}
            {/*<UncontrolledAccordion titleValue={"Menu1"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu2"}/>*/}
            {/**/}
            {/*/!*<PageTitle title={'This is APP component'}/>*!/*/}
            {/*/!*<PageTitle title={'This is APP component2'}/>*!/*/}
            {/*/!*Article 1*!/*/}
            {/*/!*<Rating value={3}/>*!/*/}
            {/*<Accordion titleValue={"Menu2"} collapsed={false}/>*/}
            {/*Article 2*/}
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
