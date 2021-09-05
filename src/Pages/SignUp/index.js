import React from 'react'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SignUp() {
    const [nome, setNome] = useState('')
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
                    <h1>Cadastrar uma conta</h1>
                    <input type='text' placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)}></input>
                    <input type='text' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='****' value={password} onChange={(e) => setPasswoord(e.target.value)}></input>
                    <button type='submit' >Cadastrar</button>
                </form>
                <Link to='/'>Já tem uma conta? Entre.</Link>
           </div>
        </div>
    )
}
