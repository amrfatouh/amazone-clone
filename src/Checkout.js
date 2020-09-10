import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout-container'>
            <div className="left">
                <div className="ad">
                    <img src="./ad.jpg" alt="" />
                </div>
                <div className="basket">
                    <h2>Your Shopping Basket</h2>
                </div>
            </div>
            <div className="right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
