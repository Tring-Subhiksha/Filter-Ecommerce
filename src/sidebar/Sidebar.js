import React from 'react'
import "../styles/Sidebar.css"
import Catgeory from './Catgeory'
import Price from './Price'
import Colors from './Colors'

const Sidebar = ({handleChange}) => {
  return (
    <div className='sidebar'>
      <div className='logo-container'>
        <Catgeory handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </div>
    </div>
  )
}

export default Sidebar
