import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';

import {useDataState, useDispatch} from "./hooks";
import {DataActionType} from "./services/actions";
import {Sentence} from "./components/sentence/sentence";
import {loadScript} from "./services/utils/loadScript";
import {ButtonNext} from "./components/button-next/button-next";

function App() {

    const dispatch = useDispatch();

    const {sentences, lastSentenceIndex} = useDataState();
    const sentence = sentences[lastSentenceIndex] ?? 'NO SENTENCE';

    useEffect(() => {
        loadScript(window.location + '/data/sentences.js')
            .then(() => {
                dispatch({type: DataActionType.INIT_DATA})
            }).catch(e => console.warn(e));

    }, [dispatch])

    console.log('sentences', sentences)

    return (
        <div className="App">
            <Sentence sentence={sentence}/>
            <ButtonNext />
        </div>
    );
}

export default App;
