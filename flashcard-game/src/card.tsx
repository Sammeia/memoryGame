import React, {JSX, useState} from 'react';
import logo from './logo.svg';
import './card.css';

type CardInfoParams = {
     id: string;
     match: string;
     flipped: boolean;
     image: string;
     content: string;
     onClick: () => void;
}

const Card: React.FC<CardInfoParams> = ({id,match,flipped,image,content,onClick}) => {

    return (
        <div onClick={onClick}>
        {flipped ? (
        <div className="card-image">
            <img src={image}/>
        </div>
    ) : (
        <div className="card-container">
            <div className="card-content">
                <h1>{content}</h1>
            </div>
        </div>
    )}
    </div>

)

}

export default Card

