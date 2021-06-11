import React from 'react';
import styles from './styles.module.css';
// import Slider from 'react-rangeslider';

export default function RangeSlider() {

    return (
        <div className={styles.sliderContainer}>
            <input 
             type="range"
             min={1} 
             max={3}
             step={1}
             value={1}
             className={styles.slider}
            />
        </div>
    );
}