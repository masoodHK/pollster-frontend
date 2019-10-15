import React, { Component } from 'react';
import Poll from '../components/Poll';

export default class Main extends Component {
    state = {
        polls: [],
        categories: [],
        error: null
    }

    componentDidMount() {
        Promise.all([
            fetch("http://127.0.0.1:8000/api/polls").then(response => response.json()), 
            fetch("http://127.0.0.1:8000/api/categories").then(response => response.json())
        ])
        .then(result => this.setState({ polls: result[0], categories: result[1] }))
        .catch(error => {
            console.log(error)
            this.setState({ error })
        })
    }

    viewPoll(pollID) {
        const { polls } = this.state
        const poll = polls.filter(poll => poll.id === pollID)[0]
        this.props.history.push(`/polls/${pollID}`, { poll })
    }

    render() {
        const { polls } = this.state
        if(error) {
            return (
                <div className="container">
                    <h1>Oops</h1>
                    <p>Unable to connect to the server. Please try again later</p>
                </div>
            )
        }

        return (
            <div className="container">
                {polls.length === 0 ?
                    <p>Loading...</p> :
                    polls.map(poll => <Poll poll={poll} key={poll.id} viewPoll={() => this.viewPoll(poll.id)} />)}
            </div>
        )
    }
}
