import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Segment, Message } from 'semantic-ui-react';
// import './styles.css'

const SignUpSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Too Short! Min 5 characters').required('Username Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    password: Yup.string().min(8, 'Too Short! Must be 8 characters long').required('Password Required'),
});

const Registration = () => {
    const navigate = useNavigate();

    return (
        <Container style={{ padding: '2em 0em' }}>
            <Segment
                textAlign='center'
                style={{ maxWidth: 300, margin: '0 auto', marginTop: '200px'}}
                raised
            >
        <h1>A.M.S</h1>
        <h2>Registration Form</h2>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}

            validationSchema={SignUpSchema}
            onSubmit={(values, actions) => {
            axios
                .post('http://localhost:3000/register', values)
                .then((res) => {
                navigate('/home');
                })

                .catch((error) => {
                    console.log(error.response.data.message);
                    actions.setSubmitting(false);
                    actions.setErrors({
                        email: error.response.data.message,
                    });
                });
            }}
        >

    {({ isSubmitting, errors, touched }) => (
        <Form>
            <Field
                type='text'
                name='name'
                placeholder='Name'
                style={{ padding: '10px' }}
            />

            {errors.name && touched.name ? (
                <Message negative>{errors.name}</Message>
            ) : null}

            <Field
                type='email'
                name='email'
                placeholder='Email'
                style={{ padding: '10px', marginTop: '20px' }}
            />

            {errors.email && touched.email ? (
                <Message negative>{errors.email}</Message>
            ) : null}

            <Field
                type='password'
                name='password'
                placeholder='Password'
                style={{ padding: '10px', marginTop: '20px' }}
            />
            {errors.password && touched.password ? (
                <Message negative>{errors.password}</Message>
            ) : null}

            <Button
                type='submit'
                primary
                disabled={isSubmitting}
                style={{ padding: '10px', marginTop: '20px', marginBottom: '20px' }}
            >
                Submit
            </Button>
            <div style={{ textAlign: "center" }}>
                <Link to="/login">
                    <p>Have an account already? Login</p>
                </Link>
            </div>
        </Form>
        
    )}
        </Formik>
    </Segment>
    </Container>
    );
};

export default Registration;



