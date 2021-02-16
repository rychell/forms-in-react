import React, { useState } from 'react';

function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            email,
            password
        }
        console.log(payload)
    }
    return (
        <form>
            <h1>Login</h1>
            <input type="text" name="email" placeholder="E-mail" onChange={handleEmailChange}/>
            <input type="password" name="password" placeholder="Senha" onChange={handlePasswordChange}/>
            <button type="submit" onClick={handleSubmit}>Entrar</button>
        </form>
    );
}

export default FormLogin;