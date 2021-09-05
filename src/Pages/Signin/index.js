import React from 'react'
import './signin.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPasswoord] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        alert('clicou')
    }

    return (
        <div className='container-center'>
           <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Sistema logoz '></img>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type='text' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='****' value={password} onChange={(e) => setPasswoord(e.target.value)}></input>
                    <button type='submit' >Acessar</button>
                </form>
                <Link to='/register'>Criar uma conta</Link>
           </div>
        </div>
    )
}
