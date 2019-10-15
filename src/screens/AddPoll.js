import React, { Component } from 'react';
import ViewContainer from '../components/ViewContainer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PollSchema = Yup.object().shape({
    question: Yup.string().min(2, 'Too Short!')
        .max(250, 'Too Long!')
        .required('Required'),
    poll_type: Yup.string(),
    ends_on: Yup.date().required("Ending date is required!!").min(new Date(2200, 0, 1)),
    category: Yup.number().positive()
});

export default class PollView extends Component {

	state = {
		categories: []
	}

	submit(values, { setSubmitting }) {
        setSubmitting(false)
        console.log(values)
        console.log('Submit')
    }

    componentDidMount() {
    	fetch("http://127.0.0.1:8000/api/categories")
    		.then(response => response.json())
    		.then(categories => this.setState({ categories }))
    		.catch(error => console.log(error))
    }

	render () {
        const { categories } = this.state
		return (
            <div className="container">
                <ViewContainer className="form-container">
                    <h2>Add a poll</h2>
                    <Formik
                        initialValues={{ question: '', poll_type: '', ends_on: '', category: 0 }}
                        validationSchema={LoginSchema}
                        onSubmit={this.submit} >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="text" placeholder="Enter your question" name="question" className="form-input" />
                                <ErrorMessage name="question" component="div" className="errors" />
                                <Field type="datetime-local" name="ends_on" className="form-input" />
                                <ErrorMessage name="ends_on" component="div" className="errors" />
                                <Field type="select" name="category">
                                    {categories.map(category => <option id={category.id} value={category.id}>{category.category_name}</option>)}
                                </Field>
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