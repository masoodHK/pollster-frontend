import React from 'react';
import moment from 'moment';

export default function DateText({ date, dateCreated }) {
    if(dateCreated) {
        return <span>{moment.utc(date, "YYYY-MM-DD  HH:mm:ss").fromNow()}</span>
    }
    else {
        return <span>{moment.utc(date, "YYYY-MM-DD  HH:mm:ss")
            .format("MMM Do YYYY, h:mm A")}</span>
    }
}
