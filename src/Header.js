import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon className='fa' icon={faSearch} />
            </div>
            <div className="options">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='option'>
                        <small>Hello {user ? user.email.split('@')[0] : 'Guest'}</small>
                        <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
                    </div>
                </Link>
                <div className='option'>
                    <small>returns</small>
                    <strong>&amp; orders</strong>
                </div>
                <div className='option'>
                    <small>Your</small>
                    <strong>Prime</strong>
                </div>
                <Link to='/checkout'>
                    <div className='cart'>
                        <FontAwesomeIcon className='fa' icon={faShoppingCart} />
                        <strong>{basket?.length}</strong>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
