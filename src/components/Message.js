import React from 'react'
import DateText from './DateText'

export default function Message({ data }) {
    return (
        <div>
            <p>{data.message}</p>
            <p>{data.sent_by}</p>
            <DateText date={data.sent_at} />
        </div>
    )
}
