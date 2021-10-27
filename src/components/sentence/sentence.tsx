import React, {useCallback} from 'react';
import {createRipples} from 'react-ripples'
import styles from './sentence.module.css';
import {DataActionType} from "../../services/actions";
import {useDispatch} from "../../hooks";
import {AmbientBg} from "../ambient-bg/ambient-bg";

export interface ISentenceProps {
    sentence: string
}

const MyRipples = createRipples({
    color: '#012347',
    during: 2200,
})


export const Sentence: React.FC<ISentenceProps> = ({sentence}) => {
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        dispatch({type: DataActionType.NEXT_SENTENCE})
    }, [dispatch])

    return (
        <div className={`${styles.main}`}>
            <AmbientBg />
            <MyRipples onClick={onClick} className={styles.bg}>
                <div className={`${styles.text}`}>
                    {sentence}
                </div>
            </MyRipples>
        </div>
    )
}