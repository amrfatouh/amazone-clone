import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="info">
                <div className="name">{title}</div>
                <div className="price"><small>$</small><strong>{price}</strong></div>
                <div className="rating">{Array(rating).fill('⭐').reduce((p, c) => p + c)}</div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>add to basket</button>
        </div>
    )
}

export default Product
