import React, { Component } from 'react'
import ViewContainer from '../components/ViewContainer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/userActions';
import { withRouter } from 'react-router-dom'

const validationTexts = {
    common: {
        required: "This field is required"
    }
}

const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(validationTexts.common.required),
    password: Yup.string().required(validationTexts.common.required),
    email: Yup.string().email().required(validationTexts.common.required)
})

class Register extends Component {
    submit(values, { setSubmitting }) {
        setSubmitting(false)
        fetch('http://localhost:8000/api/auth/registration', { 
            method: "post", 
            body: JSON.stringify(values) 
        })
            .then(response => response.json())
            .then(data => this.props.addUser(data))
            .catch(error => this.setState({error}, (state) => console.log(state)))
    }

    render() {
        return (
            <div className="container">
                <ViewContainer className="form-container">
                    <h2>Register</h2>
                    <Formik
                        initialValues={{ username: '', password: '', email: '' }}
                        validationSchema={RegisterSchema}
                        onSubmit={this.submit} >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="text" placeholder="Enter your username" name="username" className="form-input" />
                                <ErrorMessage name="username" component="div" className="errors" />
                                <Field type="password" placeholder="Enter your Password" name="password" className="form-input" />
                                <ErrorMessage name="password" component="div" className="errors" />
                                <Field type="email" placeholder="Enter your email" name="email" className="form-input" />
                                <ErrorMessage name="email" component="div" className="errors" />
                                <button type="submit" className="button" disabled={isSubmitting}>
                                    Submit
                                 </button>
                            </Form>
                        )}
                    </Formik>
                </ViewContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    addUser: dispatch => dispatch(addUser())
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))