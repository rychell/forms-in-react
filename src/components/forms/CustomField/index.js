import React from 'react';
import { Formik, Field, Form } from 'formik';

function Select(){
    return (
        <select>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
        </select>
    )
}
function ExemploField() {
  return (
    <Formik
        initialValues={{ name: '' }}
    >
    <Form>
        <h1>Melhor framework</h1>
        {/* A linha abaixo renderiza o component Select */}
        <Field type="text" name="name" placeholder="Nome" component={Select}/>

        <button type="submit">Escolher</button>
    </Form>
    </Formik>
  );
}

export default ExemploField;



