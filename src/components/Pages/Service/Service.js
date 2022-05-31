import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = ({service}) => {
    const {name,img,description,price,quantity,ratings}=service;
    return (
        <div className="premium_service">
           <img className='shadow' src={img} alt="" />
           <h2 className="head">{name}</h2>
            <p>{description}</p>
            <p> <span className="after-col">Price of the Picture: </span>{price}</p>
            <p>{quantity}</p>
            <p> <span className="after-col">Rating: </span>{ratings}</p>
            <Link to="/checkOut">
                <button type="button">
                    <span>Add Cart</span>
                    <div class="liquid"></div>
                </button>
            </Link>
        </div>
    );
};

export default Service;