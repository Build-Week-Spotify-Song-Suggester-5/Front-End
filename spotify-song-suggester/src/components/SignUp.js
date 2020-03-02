import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',

    })

    const handleChange = event => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
        console.log(newUser)
    }

    const onSubmit = event => {
        event.preventDefault()
        axios.post('https://lambda-spotify-song-suggester.herokuapp.com/api/auth/register', newUser)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const history = useHistory()
    const routeToSignIn = () => {
        history.push('/')
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>User Name</label>
            <input onChange={handleChange} id='username' type='text' name='username' />
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} id='password' type='password' name='password' />
            <button type='submit'>Sign Up</button>
            <button onClick={routeToSignIn}>Go To Sign in</button>
        </form>
    )
}

export default SignUp