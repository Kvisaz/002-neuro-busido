import React, {useCallback, useEffect} from 'react';

import {useDataState, useDispatch} from "./hooks";
import {DataActionType} from "./services/actions";
import {Sentence} from "./components/sentence/sentence";
import {loadScript} from "./services/utils/loadScript";
import {ButtonNext} from "./components/button-next/button-next";
import {Footer} from "./components/footer/footer";

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

    return (
        <div className="App">
            <Sentence sentence={sentence}/>
            <Footer>
                <div>Нейро Бусидо - кликай на страницу и становись мудрее</div>
                <div>(c) <a href='https://kelijah.livejournal.com/292717.html'>Автор текстов</a></div>
                <div>(c) <a href='https://github.com/Kvisaz/002-neuro-busido'>исходник этого сайта (не текстов)</a></div>
            </Footer>
        </div>
    );
}

export default App;
