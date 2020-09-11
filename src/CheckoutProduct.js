import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkout-product">
            <img src={image} />
            <div className="product-info">
                <h3 className='title'>{title}</h3>
                <div className="price"><small>$</small><strong>{price}</strong></div>
                <div className="rating">{Array(rating).fill('⭐').reduce((p, c) => p + c)}</div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
