import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

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
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} class='option'>
                        <small>Hello Guest</small>
                        <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
                    </div>
                </Link>
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
                        <strong>{basket?.length}</strong>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
