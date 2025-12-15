import { useState } from 'react';
import styles from './RollDies.module.css';

const RollDies = ({reset,rollDice,randomNumber,rule,RuleIT}) => {


    return (
        <div className={styles.main_container}>
            <div className={styles.die_box}>
                {/* 1. Function passed directly to onClick
                   2. Removed the "." before images (assuming inside public folder) 
                */}
                <img 
                    onClick={rollDice} 
                    src={`/images/dice/dice_${randomNumber}.png`} 
                    alt={`Dice ${randomNumber}`} 
                />
                <h2>Click On Dice To Roll</h2>
            </div>
            <div className={styles.sub_container}>
                <button onClick={reset} className={styles.restart}>Reset Score</button>
                <button onClick={()=>RuleIT()} className={styles.Rules}>{rule ? "Hide Rules":"Show Rules" }</button>
            </div>
            
        </div>
    );
};

export default RollDies;