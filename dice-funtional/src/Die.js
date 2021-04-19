import "./Die.css";

const Die = () => {
    return(
        <div>
            <i className={`Die fas fa-dice-${ this.props.face } 
                ${ this.props.shake ? 'shake-dice' : '' }`} />
        </div>
    );
};

export default Die;