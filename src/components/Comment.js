import React from 'react';
import ViewContainer from './ViewContainer';
import * as moment from 'moment';

function formatDate(date) {
    return moment.utc(date, "YYYY-MM-DD  HH:mm:ss").fromNow()
}

export default function Comment({comment}) {
    return (
        <ViewContainer>
            <p>{comment.comment_text}</p>
            <p>Made By: {comment.made_by}</p>
            <p>Created at: {formatDate(comment.date_created)}</p>
        </ViewContainer>
    )
}
