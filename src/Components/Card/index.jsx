import React from "react";
import './index.css';

export const Card = (props) => {
    return(
        <div className='product'>
            <div className='cards'>
                <img src={props.data.img} alt='product' class='productImage'/>
            </div>
            <div className='details'>
                <h1 className='price'>{props.data.price}</h1>
                <h1 className='productName'>{props.data.info}</h1>                
            </div>
        </div>
    )
};