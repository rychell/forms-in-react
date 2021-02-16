import React, { useState } from 'react';

function FormRegister() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [addressStreet, setAddressStreet] = useState('')
    const [addressNumber, setAddressNumber] = useState('')
    const [addressCity, setAddressCity] = useState('')
    const [addressCountry, setAddressCountry] = useState('')
    const [addressZipCode, setAddressZipCode] = useState('')

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handleAgeChange = (e) =>{
        setAge(e.target.value)
    }
    const handleAddressStreetChange = (e) =>{
        setAddressStreet(e.target.value)
    }
    const handleAddressNumberChange = (e) =>{
        setAddressNumber(e.target.value)
    }
    const handleAddressCityChange = (e) =>{
        setAddressCity(e.target.value)
    }
    const handleAddressCountryChange = (e) =>{
        setAddressCountry(e.target.value)
    }
    const handleAddressZipCodeChange = (e) =>{
        setAddressZipCode(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            name,
            email,
            age,
            addressStreet,
            addressNumber,
            addressCity,
            addressCountry,
            addressZipCode,
        }
        console.log(payload)
    }
    return (
        <form>
            <h1>Cadastre-se</h1>
            <input type="text" name="name" placeholder="Nome" onChange={handleEmailChange}/>
            <input type="text" name="email" placeholder="Email" onChange={handleNameChange}/>
            <input type="text" name="age" placeholder="Idade" onChange={handleAgeChange}/>
            <input type="text" name="addressStreet" placeholder="Rua" onChange={handleAddressStreetChange}/>
            <input type="text" name="addressNumber" placeholder="Número" onChange={handleAddressNumberChange}/>
            <input type="text" name="addressCity" placeholder="Cidade" onChange={handleAddressCityChange}/>
            <input type="text" name="addressCountry" placeholder="País" onChange={handleAddressCountryChange}/>
            <input type="text" name="addressZipCode" placeholder="CEP" onChange={handleAddressZipCodeChange}/>

            <button type="submit" onClick={handleSubmit}>Cadastrar</button>
        </form>
    );
}

export default FormRegister;