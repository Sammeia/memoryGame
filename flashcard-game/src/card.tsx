import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type CardInfoParams = {
     id: string;
     match: string;
     image: string;
     content: string;
}

const Card: React.FC<CardInfoParams> = ({id,match,image,content}) => {
    return (
        <div>
            <div>
                <img src={image}/>
            </div>

            <div>
                <h1>{id}</h1>
            </div>
        </div>
    )

}

