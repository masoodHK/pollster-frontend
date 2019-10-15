import React from 'react';
import styled from 'styled-components'

const ActiveText = styled.span`
    color: ${props => props.active ? "#1c1018": "red"}
    font-weight: bold
`

export default ActiveText;