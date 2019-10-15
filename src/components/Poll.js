import React from 'react'
import moment from 'moment'

import ActiveText from './ActiveText'
import ViewContainer from './ViewContainer'
import DateText from "./DateText";

export default ({poll, viewPoll}) => (
    <ViewContainer className="poll">
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
                .isAfter(moment.utc(poll.date_created, "YYYY-MM-DD  HH:mm:ss")) ? 
            <p>Updated at: <DateText date={poll.date_updated} dateCreated={true} /></p> :
            <p>Created at: <DateText date={poll.date_created} dateCreated={true} /></p>
        }
        <button className="button" onClick={viewPoll}>Show Poll</button>
    </ViewContainer>
)