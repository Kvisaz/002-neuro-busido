import React from 'react';
import styles from './floating-cubes.module.css';

interface IFloatingCubesProps {
    direction: 'up' | 'bottom'
}

const classNames = {
    'up': styles.up,
    'bottom': styles.bottom,
}

export const FloatingCubes: React.FC<IFloatingCubesProps> = ({direction}) => {
    const className = classNames[direction];

    return (
        <div className={`${styles.area} ${className}`}>
            <ul className={styles.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}