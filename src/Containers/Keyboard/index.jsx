import React, { useContext, useState } from 'react';
import DisplayContext from '../../Contexts/DisplayContext';
import RegexCalculator from '../../Utils/RegexCalculator';
import styles from './styles.module.css';

export default function Keyboard() {
    //Is there a way of dinamically generate the buttons?

    const [displayValue, setDisplayValue] = useContext(DisplayContext);
    const [isOperationDone, setIsOperationDone] = useState(false);

    const handleKeyboardInput = (value) => {
        setDisplayValue(displayValue + value);
    } 

    const handleReset = () => {
        setDisplayValue('');
        setIsOperationDone(false);
    }

    const handleDelete = () => {
        const size = displayValue.length;
        setDisplayValue(displayValue.substring(0,size - 1));
    }

    const handleOperation = () => {
        const operationString = displayValue;
        const result = RegexCalculator(operationString);
        handleKeyboardInput(`=${result}`);
        setIsOperationDone(true);
    }

    //this part of the code gives me goosegumps...
    //promise i'll try to refactorate later!
    return (
        <div className={styles.keyboardContainer}>
            <div className={styles.keyobardWrapper}>
            <button 
                className={styles.keyboardkey + ' ' + styles.key0 } 
                onClick={() => handleKeyboardInput('0')}
                disabled={isOperationDone}
            >0</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key1 } 
                onClick={() => handleKeyboardInput('1')}
                disabled={isOperationDone}

            >1</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key2 }
                onClick={() => handleKeyboardInput('2')}
                disabled={isOperationDone}
            >2</button>
            <button
                className={styles.keyboardkey + ' ' + styles.key3 } 
                onClick={() => handleKeyboardInput('3')}
                disabled={isOperationDone}
            >3</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key4 }
                onClick={() => handleKeyboardInput('4')}
                disabled={isOperationDone}
            >4</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key5 } 
                onClick={() => handleKeyboardInput('5')}
                disabled={isOperationDone}
            >5</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key6 }
                onClick={() => handleKeyboardInput('6')}
                disabled={isOperationDone}
            >6</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key7 } 
                onClick={() => handleKeyboardInput('7')}
                disabled={isOperationDone}
            >7</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key8 } 
                onClick={() => handleKeyboardInput('8')}
                disabled={isOperationDone}
            >8</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.key9 } 
                onClick={() => handleKeyboardInput('9')}
                disabled={isOperationDone}
            >9</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyPlus } 
                onClick={ () => handleKeyboardInput('+') } 
                disabled={isOperationDone}
            >+</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyMinus } 
                onClick={ () => handleKeyboardInput('-') }
                disabled={isOperationDone}
            >-</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyMulti} 
                onClick={ () => handleKeyboardInput('x') }
                disabled={isOperationDone}
            >x</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyDivision} 
                onClick={ () => handleKeyboardInput('/')}
                disabled={isOperationDone}
            >/</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyDot} 
                onClick={() => handleKeyboardInput('.')}
                disabled={isOperationDone}
            >.</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyDel} 
                onClick={handleDelete}
                disabled={isOperationDone}
            >Del</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyReset}
                onClick={handleReset}
            >Reset</button>
            <button 
                className={styles.keyboardkey + ' ' + styles.keyEqual}
                onClick={handleOperation}
                disabled={isOperationDone}
            >=</button>
            </div>


        </div>
    )
}