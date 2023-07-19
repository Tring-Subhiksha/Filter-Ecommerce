import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import '../styles/Navbar.css'
const Navbar = ({ handleInputChange, query }) => {
  return (
    <nav>
      👟Softque Shoes
    <div className='nav-container'>
     <input type="text" 
     className='search-input'
     onChange={handleInputChange}
     value={query} 
     placeholder='Enter Your Search shoes'></input>
    </div>
    <div className='profile-container'>
        <AiOutlineShoppingCart className='nav-icons'/>Cart
    
    </div>
    </nav>
  )
}

export default Navbar
