import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context";
import { useContext } from "react";
const CartWidgetComponent = () => {
    const { itemCount } = useContext(CartContext);
    return (

        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{itemCount}</span>
        </div>
    )
}

export default CartWidgetComponent;