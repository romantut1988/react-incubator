import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion"
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UnconrolledOnOff/UncontrolledOnOff";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={'App'}>
            {/*<UncontrolledOnOff />*/}

            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <UncontrolledRating />

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={ () => { setAccordionCollapsed(!accordionCollapsed)} }/>

            {/*<OnOff on={switchOn} onChange={ setSwitchOn }/>*/}

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            {/*<Rating value={3} />*/}
            {/*<Accordion titleValue={'Menu'} collapsed={false} />*/}

            {/*<UncontrolledRating value={0} />*/}
            {/*<UncontrolledRating value={1} />*/}
            {/*<UncontrolledRating value={2} />*/}
            {/*<UncontrolledRating value={3} />*/}
            {/*<UncontrolledRating value={4} />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}


export default App;
