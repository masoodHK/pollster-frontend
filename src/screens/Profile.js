import React, { Component } from 'react';

export default class Profile extends Component {
	state = {
		profile: {},
		error: null,
		edit: false
	}

	componentDidMount() {
		fetch(`http://localhost:8000/api/users/${this.props.user.id}`)
			.then(response => response.json())
			.then(profile => this.setState({ profile }))
			.catch(error => this.setState({ error }, () => console.log(error)))
	}

	render () {
		const { error, profile, false } = this.state;

		if(error) {

		}
		return (
            <div className="container">
                <p>Profile works!</p>
                
            </div>
        )
	}
}