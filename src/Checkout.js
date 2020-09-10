import React from 'react'
import './Checkout.css'

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
                <div className="subtotal">
                    <span>Subtotal(0 items): $<strong>0</strong></span>
                    <div><input type="checkbox" /> This order contains a gift</div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
