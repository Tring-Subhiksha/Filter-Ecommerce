import React from 'react'
import {BsFillBagFill} from "react-icons/bs"
import "../styles/products.css"

const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    
      <div className='card'>
        <img src={img} 
        alt={title} 
        className='card-img'/>
        <div className='card-details'>
          <div className='card-title'>
            <h3 className='card-title'>{title}</h3>
            <div className='card-reviews'>
            {star}{star}{star}{star}
             <span className='total-reviews'>{reviews}</span>
            </div>
            <div className='card-price'>
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className='bag'>
            <BsFillBagFill className='bag-icon'/>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Card
