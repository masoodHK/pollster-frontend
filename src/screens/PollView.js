import React from 'react';
import moment from 'moment';

import Comment from '../components/Comment';

export default class PollView extends React.Component {
	state = {
		options: [],
		comments: [],
		selectedOption: 0,
		comment: "", 
		showResult: false,
	}

	componentDidMount() {
		const { poll } = this.props.history.state;
		Promise.all([
			fetch(`http://127.0.0.1:8000/api/polls/${poll.id}/options`).then(response => response.json()),
			fetch(`http://127.0.0.1:8000/api/polls/${poll.id}/comment`).then(response => response.json()),
		])
            .then(result => this.setState({ options: result[0], comments: result[1] }))
            .catch(error => console.log(error))
	}

	vote = () => {
		const { selectedOption, options } = this.state;
		const option = options.filter(option => option.id === selectedOption)[0];
		option.vote += 1
		fetch(`http://127.0.0.1:8000/api/polls/${poll.id}/options/${selectedOption}`, {
			method: "POST",
			body: JSON.stringify(option),
		})
		.then(response => response.json())
		.then(data => this.setState({ options: options.map(option => {
			if(option.id === data.id){
				option.vote = data.vote
			}
			return option
		}), showResult: true}))
	}

	onChangeOption = event => {
		this.setState({
			selectedOption: event.target.value
		});
	}

	render () {
		const { poll } = this.props.history.state
		const { options, comments } = this.state
		if (options.length === 0) {
			return (
				<div className="container">
					<p>Loading...</p>
				</div>
			)
		}
		return (
            <div className="container">
                <h2>{poll.question}</h2>
				<p>Created By: {poll.created_by}</p>
				<p>Status: {poll.is_active ? 
					<ActiveText active>Open</ActiveText> : 
					<ActiveText>Closed</ActiveText>
				}</p>
				<p>Ends on: <DateText date={poll.ends_on} /></p>
				<p>Type of Poll: {poll.poll_type}</p>
				<p>Category: {poll.category}</p>
				{moment.utc(poll.date_updated, "YYYY-MM-DD  HH:mm:ss")
						.isAfter(moment.utc(poll.date_created, `YYYY-MM-DD  HH:mm:ss`)) ? 
					<p>Updated at: <DateText date={poll.date_updated} dateCreated={true} /></p> :
					<p>Created at: <DateText date={poll.date_created} dateCreated={true} /></p>
				}
				<h3>Options</h3>
				{options.map(option => <span id={option.id}>
					<label>{option.text}</label>
					<input type="radio" 
						name={option.id} 
						value={option.id}
						checked={this.state.selectedOption === option.id}
						onChange={this.onChangeOption}/>
				</span>)}
				<button className="button" onClick={viewPoll}>Vote</button>
				<h3>Comments</h3>
				<textarea></textarea>
				{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
	}
}