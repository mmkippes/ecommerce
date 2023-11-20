import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
    
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get("https://dummyjson.com/products?limit=14").then(res=>{
      setProducts(res.data.products)
    }).catch(e=>console.log(e))
  },[])



  return (
    <ItemListContainer products={products}/>
  )
}

export default Home
