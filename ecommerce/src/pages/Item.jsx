import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

const Item = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
        setProduct(res.data)
      }).catch(e=>console.log(e))
    },[id])

  return (
    <ItemDetailContainer product={product}/>
  )
}

export default Item