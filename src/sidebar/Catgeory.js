import React from 'react'
import "../styles/Category.css"
import Input from "../components/Input"
const Catgeory = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>
        Catgeory
      </h2>
      <div>
        
          <Input handleChange={handleChange} 
          type="radio" 
          value="" 
          name="test"
          title="All"
          />
          
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  )
}

export default Catgeory
