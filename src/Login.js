import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login(props) {

    console.log(props)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => setError(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="form-container">
                <h2>Sign-in</h2>
                <form >
                    <h4>E-mail</h4>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='sign-in' onClick={signIn}>Sign In</button>
                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button className='sign-up' onClick={register}>Create Amazon Account</button>
                </form>
                <div className="error"><small>{error ? error : null}</small></div>
            </div>
        </div>
    )
}

export default Login
