import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from "../../context"

export const AddItemButton = ({ label = "Agregar al carrito", quantity, handleResetQuantity }) => {

    const { itemCount, setItemCount } = useContext(CartContext)

    const handleAddCart = () => {
        setItemCount(itemCount + quantity);
        handleResetQuantity()
    }

    return (
        <Button onClick={() => handleAddCart()} style={{ margin: 10 }} > {label} </Button>
    )
}