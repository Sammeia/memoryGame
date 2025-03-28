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

