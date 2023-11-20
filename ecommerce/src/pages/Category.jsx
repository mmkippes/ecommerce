import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

const Category = () => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/category/${categoryId}`).then(res=>{
        setProducts(res.data.products)
      }).catch(e=>console.log(e))
    },[categoryId])
  
    

  return (
        <ItemListContainer products={products}/>
  )
}

export default Category