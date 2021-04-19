import React, { useState } from 'react';
import Die from "./Die";
import "./DiceRoll.css";

const DiceRoll = () => {
    const sides = ["one", "two", "three", "four", "five", "six"];
    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('two');
    const [rollValue, setRollValue] = useState(3);
    const [rolling, setRolling] = useState(false);   
 
   

    // componentDidMount() {
    //     this.roll();
    // };

    const roll = () => {
        const num1 = Math.floor(Math.random() * sides.length);
        const num2 = Math.floor(Math.random() * sides.length);
        const dieRoll1 = sides[num1];
        const dieRoll2 = sides[num2];
        setDie1(dieRoll1);
        setDie2(dieRoll2);
        setRollValue(dieRoll1 + dieRoll2 + 2)

        setTimeout(()=> {
            setRolling(!rolling)
        }, 1000)
    };
 
    
    return (
        <div className="dice-roll-container">
            <div className="dice-container">
                <Die face={ die1 } 
                    shake={ rolling } 
                />
                <Die face={ die2 }
                    shake={ rolling }
                />
            </div>
            <div className="roll-text"
                style={ rolling ? { opacity: '0', transition: 'None' } : 
                    { opacity: '1', transition: 'opacity 1.0s' }}
            >
                You rolled a { rollValue }!
            </div>
            <button 
                className="roll-button" 
                onClick={ roll }
                disabled={ rolling }
            >
                { rolling ? "Rolling..." : "Roll Dice!" }
            </button>
        </div>
    );
};

export default DiceRoll;