import React from 'react';
import styles from './button-next.module.css';
import Button from "react-bootstrap/Button";

export const ButtonNext: React.FC = ()=>{
    return (
        <div className={styles.main}>
            <Button variant="dark"> Next... </Button>
        </div>
    )
}