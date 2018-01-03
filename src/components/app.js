import React, {Component} from 'react';
import '../assets/css/app.css';
import cardData from '../assets/helpers/card_data';

import Card from './card';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            cards: cardData
        };

        this.flipCard = this.flipCard.bind(this);
    }


    flipCard(index){

        const newCards = this.state.cards.slice();

        newCards[index].flipped = !newCards[index].flipped;


        this.setState({
            card: newCards
        });
    }

    render(){
        console.log(this.state.card);

        const cardElements = this.state.cards.map( (card, index) => {
                return <Card card={card} key={index} flip={() => this.flipCard(index)}/>
        });

        return(
            <div className="app">
                <h1>Memory Match</h1>
                {cardElements}
            </div>
        )
    }
}

export default App;
