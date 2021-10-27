import React from 'react';
import styles from './ambient-bg.module.css';

import {useDataState} from "../../hooks";

export const AmbientBg: React.FC = () => {

    const {lastSentenceIndex} = useDataState();


    const bgs = [
        (<div className={`${styles.main} ${styles.gradientAnimation}`}></div>),
    ]

    const nextIndex = lastSentenceIndex % bgs.length;

    return (<>{bgs[nextIndex]}</>)
}