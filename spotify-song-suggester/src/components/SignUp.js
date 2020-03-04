import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
let yup = require('yup')

let schema = Yup.object().shape({
    username: yup.string().min(3).required(),

    password: yup.string().min(6).required()
})



const SignUp = () => {

    const [toggle, setToggle] = useState(true)
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',

    })

    const toggleTrueFalse = () => setToggle(false)

    const handleChange = event => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(newUser)
        schema.isValid(newUser).then(valid => {
            console.log(valid)
            valid ? (
                axios.post('https://lambda-spotify-song-suggester.herokuapp.com/api/auth/register', newUser)
                    .then(response => {
                        console.log(response)

                    })
            ) : console.log(schema)

        })
    }

    const history = useHistory()
    const routeToSignIn = () => {
        history.push('/')
    }





    return (
        <div>
            <header className='sign-in'>
                <div className='greenbar'><h1>Spotify Song suggestor</h1></div>
                <h2>Sign Up</h2>
                <p className={`${toggle ? "is-displayed" : ''}`}>Please Fill Out Fields Correctly{}</p>
            </header>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>User Name</label>
                <input onChange={handleChange} id='username' type='text' name='username' placeholder="UserName" />
                <label htmlFor='password'>Password</label>
                <input onChange={handleChange} id='password' type='password' name='password' placeholder='Password' />
                <div className='btn-container'>
                    <button type='submit'>Sign Up</button>
                    <button onClick={routeToSignIn}>Go To Sign in</button>
                </div>
            </form>
        </div>
    )

}



export default SignUp