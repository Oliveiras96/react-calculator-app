import React from 'react';
import styles from './styles.module.css';
import RangeSlider from './Components/RangeSlider';

export default function Header() {
    return (
        <div className={styles.header}>
            <span className={styles.title}>calc</span>
            <div className={styles.theme}>
                <div className={styles.themeName}>theme</div>
                <div className={styles.themeState}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div className={styles.themeSelector}>
                    <RangeSlider />
                </div>
            </div>
        </div>
    
    );
}