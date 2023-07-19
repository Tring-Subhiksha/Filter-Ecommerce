import React from 'react'
import Input from "../components/Input"
import "../styles/Colors.css"

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      
          <Input 
          handleChange={handleChange}
          type="radio" 
          name="test2"
          value=""
          title="All"
          />
          
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        
          <Input
            handleChange={handleChange}
            type="radio"
            title="White"
            value="white"
            name="test1"
          />
         
     
       
    </div>
  )
}

export default Colors
