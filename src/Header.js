import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <Link to='/'><img src='./logo.png' /></Link>
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
                <Link to='/checkout'>
                    <div className='cart'>
                        <i class="fas fa-shopping-cart"></i>
                        <strong>0</strong>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
