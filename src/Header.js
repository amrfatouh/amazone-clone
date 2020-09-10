import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src='./logo.png' />
            </div>
            <div className='search-bar'>
                <input type='text' />
                <i class="fas fa-search"></i>
            </div>
            <div className="options">
                <div class='option'>
                    <small>Hello</small>
                    <strong>Sign in</strong>
                </div>
                <div class='option'>
                    <small>returns</small>
                    <strong>& orders</strong>
                </div>
                <div class='option'>
                    <small>Your</small>
                    <strong>Prime</strong>
                </div>
                <div className='cart'>
                    <i class="fas fa-shopping-cart"></i>
                    <strong>0</strong>
                </div>
            </div>
        </div>
    )
}

export default Header
