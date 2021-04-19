import "./Die.css";

const Die = (props) => {
    return(
        <div>
            <i className={`Die fas fa-dice-${ props.face } 
                ${ props.shake ? 'shake-dice' : '' }`} />
        </div>
    );
};

export default Die;