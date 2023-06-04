import React from "react";
import "./Card.css";
import {AiFillStar} from 'react-icons/ai'
export const Card = ({ type, name, city, img, rating, price, superHost }) => {
  return (
    <div className="card">
        {
            superHost ? <button className="superhost">SuperHost</button> : null
        }
        
      <img src={img} alt={name} />
      <div className="card-content">
        <div className="f-line">
        <text className="primary-text">{type} in {city}</text>
        <div style={{display:"flex",  marginLeft: '7px'}}>
            {rating ? <AiFillStar style={{marginRight:'5px'}} /> : ''}
        <text className="rating">{rating}</text>
        </div>
        </div>
        <text className="text name">{name}</text>
        <br></br>
      </div>
        <text className="price">$<p style={{fontWeight:'700', marginRight:'5px'}}>{price}</p> night</text>
    </div>
  );
};
