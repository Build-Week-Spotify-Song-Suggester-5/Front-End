import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
let yup = require('yup')

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})


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
        schema.isValid(newUser).then(valid => {
            console.log(valid)
            valid ? (
                axios.post('https://lambda-spotify-song-suggester.herokuapp.com/api/auth/register', newUser)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            ) : alert('Fill out the form')
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
            </header>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>User Name</label>
                <input onChange={handleChange} id='username' type='text' name='username' placeholder="Username" />
                <label htmlFor='password'>Password</label>
                <input onChange={handleChange} id='password' type='password' name='password' placeholder='password' />
                <div className='btn-container'>
                    <button type='submit'>Sign Up</button>
                    <button onClick={routeToSignIn}>Go To Sign in</button>
                </div>
            </form>
        </div>
    )

}



export default SignUp