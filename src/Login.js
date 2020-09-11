import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="form-container">
                <h2>Sign-in</h2>
                <form >
                    <h4>E-mail</h4>
                    <input type="text" />
                    <h4>Password</h4>
                    <input type="password" />
                    <button className='sign-in'>Sign In</button>
                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button className='sign-up'>Create Amazon Account</button>

                </form>
            </div>
        </div>
    )
}

export default Login
