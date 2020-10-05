import React from 'react'
import { Formik, Field, Form, ErrorMessage} from 'formik'
import schema from './Schema'
import { makeStyles } from '@material-ui/core/styles';

import './style.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  }));

function Check() {
    const classes = useStyles();

    function onSumit(values, actions) {
        console.log('SUBMIT', values)
    }

    return (
        <div className='Check'>
            <Formik 
                validationSchema={schema}
                onSubmit={onSumit}
                validateOnMount
                initialValues={{
                    name: '',
                    email: '',
                    adress: '',
                    cep: '',
                    rua: '',
                    bairro: '',
                    numero: '',
                    rest: '',
                }}
                render={({ values, isValid}) => (
                    <Form className="submission-form">
                        <div>
                            <label>Nome</label>
                            <Field name='name' type='text' /> 
                            <ErrorMessage name='name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field name='email' type='email' /> 
                            <ErrorMessage name='email' />
                        </div>
                        <div>
                            <label>Endereço</label>
                            <Field name='adress' type='text' /> 
                            <ErrorMessage name='adress' />
                        </div>
                        <div>
                            <label>cep</label>
                            <Field name='cep' type='string' /> 
                            <ErrorMessage name='cep' />
                        </div>
                        <div>
                            <label>rua</label>
                            <Field name='rua' type='text' /> 
                            <ErrorMessage name='rua' />
                        </div>
                        <div>
                            <label>bairro</label>
                            <Field name='bairro' type='text' /> 
                            <ErrorMessage name='bairro' />
                        </div>
                        <div>
                            <label>numero</label>
                            <Field name='numero' type='text' /> 
                            <ErrorMessage name='numero' />
                        </div>
                        <div>
                            <label>Serviço rest</label>
                            <Field name='rest' type='string' /> 
                            <ErrorMessage name='rest' />
                        </div>
                        <button type='submit' id="send" disabled={!isValid} >Pagar</button>
                    </Form>
                )}
            />
        </div>
    )
}

export default Check
