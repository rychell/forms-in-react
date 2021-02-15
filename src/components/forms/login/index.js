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
            <input type="text" name="email" onChange={handleEmailChange}/>
            <input type="password" name="password" onChange={handlePasswordChange}/>
            <button type="submit" onClick={handleSubmit}>Entrar</button>
        </form>
    );
}

export default FormLogin;