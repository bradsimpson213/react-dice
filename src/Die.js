import React, { Component } from 'react';
import "./Die.css";

class Die extends Component {
    render(){
        return (
            <div>
                <i className={`Die fas fa-dice-${ this.props.face } 
                    ${ this.props.shake ? 'shake-dice' : '' }`} />
            </div>
        );
    }
}

export default Die;