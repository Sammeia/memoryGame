import React from 'react';
import './card.css';

type CardInfoParams = {
     id: string;
     match: string;
     flipped: boolean;
     image: string;
     content: string;
     onClick: () => void;
}

/*
    Component that renders a card on the screen
    @param {string} id = The unique identifier assigned to the card
    @param {boolean} flipped = Whether the card is flipped or not
    @param {string} image = The image url to be displayed
    @param {string} content = The content displayed on the flipped card
    @param {function} onClick = The function that executes when the card is clicked
*/
const Card: React.FC<CardInfoParams> = ({id,flipped,image,content,onClick}) => {

    return (
        <div onClick={onClick}>
            {flipped ? (
                <div className="card-container">
                    <img className="card-image" src={image} alt=""/>
                    <h1 className="flipped-content">{content}</h1>
                </div>
            ) : (
                <div className="card-container">
                    <div className="card-content">
                        <h1>{id}</h1>
                    </div>
                </div>
            )}
        </div>  
    )
}

export default Card;

