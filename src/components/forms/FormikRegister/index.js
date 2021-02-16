import React from 'react';
import { Formik, Field, Form } from 'formik';

function FormikRegister() {
    const handleSubmit = (values) =>{
        console.log(JSON.stringify(values, null, 4))
    }
  return (
    <Formik
        initialValues={{
            name: '',
            email: '',
            age: '',
            addressStreet: '',
            addressNumber: '',
            addressCity: '',
            addressCountry: '',
            addressZipCode: '',
        }}
        onSubmit={handleSubmit}
    >

    <Form>
        <h1>Cadastre-se</h1>

        <Field type="text" name="name" placeholder="Nome"/>
        <Field type="text" name="email" placeholder="Email"/>
        <Field type="text" name="age" placeholder="Idade"/>
        <Field type="text" name="addressStreet" placeholder="Rua"/>
        <Field type="text" name="addressNumber" placeholder="Número"/>
        <Field type="text" name="addressCity" placeholder="Cidade"/>
        <Field type="text" name="addressCountry" placeholder="País"/>
        <Field type="text" name="addressZipCode" placeholder="CEP"/>
        
        <button type="submit">Cadastrar</button>
    </Form>
  </Formik>
  );
}

export default FormikRegister;