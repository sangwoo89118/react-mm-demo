
import React from 'react';
import '../assets/css/card.css';

export default props =>{


    const { card: { front, back, flipped }, flip} = props;



    return(
        <div className="card">
            <div className="front">
                <img src={front}/>
            </div>
            <div onClick={flip} className={`back ${flipped ? 'flipped' : ''}`}>
                <img src={back}/>
            </div>
        </div>
    )
}