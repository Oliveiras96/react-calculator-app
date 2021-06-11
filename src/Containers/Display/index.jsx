import React, { useContext } from 'react';
import DisplayContext from '../../Contexts/DisplayContext';
import styles from './styles.module.css';

export default function Display() {
    const displayValue = useContext(DisplayContext);
    return (
        <div className={styles.displayContainer}>
            <p>{displayValue}</p>
        </div>
    );
}