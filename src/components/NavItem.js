import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function NavItem(props) {
    const styleProps = useSpring({opacity: 1, from: {opacity: 0}})
    return <animated.li props={styleProps}>{props.children}</animated.li>
}
