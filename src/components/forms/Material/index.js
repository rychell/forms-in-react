import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';

function MaterialFormik() {
  return (
    <Formik
        initialValues={{ name: '', surname: '', age: '' }}
    >
    <Form>
        <h1>Cadastre-se</h1>
        <Field type="text" name="name" placeholder="Nome" component={TextField}/>
        <Field type="text" name="surname" placeholder="Sobrenome" component={TextField}/>
        <Field type="text" name="age" placeholder="Idade" component={TextField}/>

        <Button
            variant="contained"
            color="primary"
          >
            Salvar
          </Button>
    </Form>
    </Formik>
  );
}

export default MaterialFormik;



