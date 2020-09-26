import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout-container'>
            <div className="left">
                <div className="ad">
                    <img src="./ad.jpg" alt="" />
                </div>
                <div className="basket">
                    <h3>Hello, {user?.email.slice(0, user.email.indexOf('@'))}</h3>
                    <h2>Your Shopping Basket</h2>
                    <div className="checkout-products-container">
                        {basket.map(product => {
                            return (
                                <CheckoutProduct
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
