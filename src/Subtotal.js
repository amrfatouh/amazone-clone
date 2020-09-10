import React from 'react'
import './Subtotal.css'
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <span>Subtotal(0 items): $<strong>{basket.reduce((p, c) => p + c.price, 0)}</strong></span>
            <div><input type="checkbox" /> This order contains a gift</div>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
