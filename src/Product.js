import React from 'react'
import './Product.css'

function Product({ title, price, rating, image }) {
    return (
        <div className="product">
            <div className="info">
                <div className="name">{title}</div>
                <div className="price"><small>$</small><strong>{price}</strong></div>
                <div className="rating">{Array(rating).fill('⭐').reduce((p, c) => p + c)}</div>
            </div>
            <img src={image} />
            <button>add to basket</button>
        </div>
    )
}

export default Product
