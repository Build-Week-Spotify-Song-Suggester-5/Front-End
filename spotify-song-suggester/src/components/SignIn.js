import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
    const [toggle, setToggle] = useState(true)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()
    const routeToSignUp = () => {
        history.push('/sign-up')
    }

    const toggleTrueFalse = () => setToggle(false)

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://lambda-spotify-song-suggester.herokuapp.com/api/auth/login', user)
            .then(response => {
                console.log(response)
                history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
                toggleTrueFalse()
            })
    }

    return (
        <div>
            <header className='sign-in'>
                <div className='greenbar'>nicks component</div>
                <h2>Sign In</h2>
                <p className={`${toggle ? "is-displayed" : ''}`}>Incorrect Username or Password</p>
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

export default SignIn