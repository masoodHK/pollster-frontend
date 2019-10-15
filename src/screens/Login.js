import React, { Component } from 'react'
import ViewContainer from '../components/ViewContainer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/userActions';
import { withRouter } from 'react-router-dom'

const LoginSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string().required("Required!")
});

class Login extends Component {
    state = {
        error
    }
    submit(values, { setSubmitting }) {
        setSubmitting(false)
        console.log(values)
        fetch('http://localhost:8000/api/auth/login', { 
            method: "post", 
            body: JSON.stringify(values) 
        })
            .then(response => response.json())
            .then(data => this.props.addUser(data))
            .catch(error => this.setState({error}, (state) => console.log(state)))
    }

    render() {
        const { error } = this.state
        return (
            <div className="container">
                <ViewContainer className="form-container">
                    <h2>Login</h2>
                    {error? <p>Unable to login</p> : null}
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={this.submit} >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="text" placeholder="Enter your username" name="username" className="form-input" />
                                <ErrorMessage name="username" component="div" className="errors" />
                                <Field type="password" placeholder="Enter your Password" name="password" className="form-input" />
                                <ErrorMessage name="password" component="div" className="errors" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));