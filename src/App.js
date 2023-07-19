import Navbar from "./navigation/Navbar";
import './App.css';
import Products from "./products/Products";

import Sidebar from "./sidebar/Sidebar";
import {useState } from "react";
import Card from "./components/Card"

//Databse
import Data from "./db/data";


function App(){
  const[SelectedCategory,setSelectedCategory]=useState("");
  const[query,setQuery]=useState("")
 
 
  //input filter
  const handleInputChange=((e)=>{
    setQuery(e.target.value)
  });

  //filter items
  const filteredItems=Data.filter((Data)=>Data.title.toLowerCase().indexOf(query.toLowerCase())!==-1)
 
  //radio filters
  const handleChange=((e)=>{
    setSelectedCategory(e.target.value)
  })

 

const filteredData=(Data,selected,query)=>
{
  let filteredProducts=Data

  //Filtering input items
  if(query){
    filteredProducts=filteredItems
  }

  //selected filter
  if(selected){
    filteredProducts=filteredProducts.filter(
      ({category,color,company,newPrice,title})=>
      category===selected||
      color===selected|| 
      company===selected|| 
      newPrice===selected|| 
      title===selected
      );
  }
  return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
    <Card key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />

  ));
}
  
const result=filteredData(Data,SelectedCategory,query)
  return (
    <div className="App">
      <Sidebar handleChange={handleChange}/>
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Products result={result}/>
     </div>
  );
}

export default App;
