import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

const SignIn = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

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
            })
            .catch(err => {
                console.log(err)
            })
    }

    const history = useHistory()
    const routeToSignUp = () => {
        history.push('/sign-up')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input onChange={handleChange} id='username' type='text' name='username' />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} id='password' type='password' name='password' />
                <button type="submit">Sign In</button>
                <button onClick={routeToSignUp}>Sign Up</button>
            </form>
        </div>
    )
}

let yup = require('yup')

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})
console.log(schema)

export default SignIn