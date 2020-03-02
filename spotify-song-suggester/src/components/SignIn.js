import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

const SignIn = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()
    const routeToSignUp = () => {
        history.push('/sign-up')
    }

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(user)
        axios.post('https://lambda-spotify-song-suggester.herokuapp.com/api/auth/login', user)
            .then(response => {
                console.log(response)
                history.push('/sign-up')
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <header className='sign-in'>
                <div className='greenbar'><h1>Spotify Song suggestor</h1></div>
                <h2>Sign In</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input onChange={handleChange} id='username' type='text' name='username' placeholder='UserName' />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} id='password' type='password' name='password' placeholder='Password' />
                <div className='btn-container'>
                    <button type="submit">Sign In</button>
                    <button onClick={routeToSignUp}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

let yup = require('yup')


export default SignIn