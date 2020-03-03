import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
let yup = require('yup')

let schema = yup.object().shape({
    username: yup.string().required().length(3),
    password: yup.string().required().length(6)
})


const SignUp = () => {
    const [toggle, setToggle] = useState(true)
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',

    })

    const toggleTrueFalse = () => setToggle(!toggle)

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
            ) : toggleTrueFalse()
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
                <p className={`${toggle ? "is-displayed" : ''}`}>Fields Incomplete</p>
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