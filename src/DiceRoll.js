import React, { Component } from 'react';
import Die from "./Die";
import "./DiceRoll.css";

class DiceRoll extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: "two", rollValue: 3};
    };

    componentDidMount() {
        this.roll();
    }

    roll = () => {
        const num1 = Math.floor(Math.random() * this.props.sides.length);
        const num2 = Math.floor(Math.random() * this.props.sides.length);
        const dieRoll1 = this.props.sides[num1];
        const dieRoll2 = this.props.sides[num2];
        this.setState({die1: dieRoll1, die2: dieRoll2, rollValue: (num1 + num2 + 2) })
    };
 
    render(){
        return (
            <div className="dice-roll-container">
                <div className="dice-container">
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <div className="roll-text">You rolled a {this.state.rollValue}!</div>
                <button className="roll-button" onClick={ this.roll }>Roll Dice!</button>
            </div>
        );
    };
};

export default DiceRoll;