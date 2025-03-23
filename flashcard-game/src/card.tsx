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

    const [flipped, setFlipped] = useState(false);

    return (
        flipped ? (
        <div className="card-image">
        <img src={image}/>
        <button onClick={()=>setFlipped(false)}>Flip</button>
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

