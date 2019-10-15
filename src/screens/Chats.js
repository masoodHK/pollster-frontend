import React, { Component } from 'react';

export default class Chats extends Component {
	state = {
		chats: [],
		error: null
	}
	componentDidMount() {
		fetch(`http://localhost:8000/api/chats/`)
			.then(response => response.json())
			.then(chats => this.setState({ chats }))
			.catch(error => this.setState({ error }, () => console.log(error)))	
	}

	render() {
		const { error, chats } = this.state
		if (error) {
			return (
				<div className="container">
					<p>Unable to retreive chats</p>
				</div>
			)
		}
		
		return (
			<div className="container">
				<p>Chats work</p>
			</div>
		)
	}
}