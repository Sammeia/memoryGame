import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type CardInfoParams = {
     id: string;
     match: string;
     flipped: boolean;
     image: string;
     content: string;
     onClick: () => void;
}

const Card: React.FC<CardInfoParams> = ({id,match,flipped,image,content}) => {

    return (
        flipped ? (
        <div className="card-image">
        <img src={image}/>
        </div>
    ) : (
        <div className="card-container">
        <div className="card-content">
            <h1>{id}</h1>
        </div>
    </div>
    )

)

}

export default Card

