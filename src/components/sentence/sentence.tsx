import React from 'react';
import styles from './sentence.module.css';

export interface ISentenceProps {
    sentence: string
}

export const Sentence: React.FC<ISentenceProps> = ({sentence}) => {
    return (
        <div className={`${styles.main} ${styles.bganimation} ${styles.text}`}>{sentence}</div>
    )
}