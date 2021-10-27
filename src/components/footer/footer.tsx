import React from 'react';
import styles from './footer.module.css';

export const Footer: React.FC = ({children}) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}