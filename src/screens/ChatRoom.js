import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Message from '../components/Message'

export default class Chats extends Component {
	state = {
		messages: [],
		error: null
	}
	
	componentDidMount() {
		const { chat } = this.props.history.state
		fetch(`http://localhost:8000/api/chats/${chat.id}/messages`)
			.then(response => response.json())
			.then(messages => this.setState({ messages }))
			.catch(error => this.setState({ error }, () => console.log(error)))	
	}
	
	submit(values, { setSubmitting }) {
        setSubmitting(false)
        console.log(values)
        console.log('Submit')
	}
	
	render() {
		const { messages, error } = this.state
		if(error) {
			return (
				<div className="container">
					<div className="messages">
						<p>Unable to retreive messages</p>
					</div>
					<div className="input">
						<Formik
							initialValues={{ message: '' }}
							onSubmit={this.submit} >
							{({ isSubmitting }) => (
								<Form>
									<Field type="text" placeholder="Enter your message" name="username" className="form-input" />
									<ErrorMessage name="username" component="div" className="errors" />
									<button type="submit" className="button" disabled={isSubmitting}>
										Submit
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			)
		}
		return (
			<div className="container">
				<div className="messages">
					{messages.length === 0 ? 
						<p>Send a message to start a conversation</p> : 
						messages.map(message => <Message id={message.id} data={message} />)
					}
				</div>
				<div className="input">
					<Formik
                        initialValues={{ message: '' }}
                        onSubmit={this.submit} >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="text" placeholder="Enter your username" name="username" className="form-input" />
                                <ErrorMessage name="username" component="div" className="errors" />
                                <button type="submit" className="button" disabled={isSubmitting}>
                                    Submit
                                 </button>
                            </Form>
                        )}
                    </Formik>
				</div>
			</div>
		)
	}
}