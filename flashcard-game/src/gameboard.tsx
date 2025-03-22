import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type GameBoardProps = {
    onStartClick: boolean;
};

const GameBoard: React.FC<GameBoardProps> = ({onStartClick}) => {
    const cardArray = [
        {
            id:"1",
            match:"1",
            image:"https://via.placeholder.com/150",
            content:"Captain America"
        },
        {
            id:"2",
            match:"1",
            image:"https://via.placeholder.com/150",
            content:"Captain America"
        },
        {
            id:"3",
            match:"2",
            image:"https://via.placeholder.com/150",
            content:"Captain Marvel"
        },
        {
            id:"4",
            match:"2",
            image:"https://via.placeholder.com/150",
            content:"Captain Marvel"
        },
        {
            id:"5",
            match:"3",
            image:"https://via.placeholder.com/150",
            content:"The Hulk"
        },
        {
            id:"6",
            match:"3",
            image:"https://via.placeholder.com/150",
            content:"The Hulk"
        },
        {
            id:"7",
            match:"4",
            image:"https://via.placeholder.com/150",
            content:"Black Widow"
        },
        {
            id:"8",
            match:"4",
            image:"https://via.placeholder.com/150",
            content:"Black Widow"
        },
        {
            id:"9",
            match:"5",
            image:"https://via.placeholder.com/150",
            content:"Iron Man"
        },
        {
            id:"10",
            match:"5",
            image:"https://via.placeholder.com/150",
            content:"Iron Man"
        },
        {
            id:"11",
            match:"6",
            image:"https://via.placeholder.com/150",
            content:"Hawkeye"
        },
        {
            id:"12",
            match:"6",
            image:"https://via.placeholder.com/150",
            content:"Hawkeye"
        },
        {
            id:"13",
            match:"7",
            image:"https://via.placeholder.com/150",
            content:"Thor"
        },
        {
            id:"14",
            match:"7",
            image:"https://via.placeholder.com/150",
            content:"Thor"
        },
    ]
    return (
        <div className = "card-grid">
            {cardArray.map((index)=>(

                <div key={index}>
                    
                </div>
            )}
        </div>
    )
}