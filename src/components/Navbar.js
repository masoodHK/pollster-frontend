import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from "react-sidebar";

import NavItem from './NavItem';

const sidebarStyle = { 
    sidebar: { 
        background: "rgba(245, 245, 245)", 
        position: "fixed"
    }, 
}

const mql = window.matchMedia(`(min-width: 800px)`);

export default function Navbar(props) {
    const [sidebarOpen, onOpen] = useState(false)
    const [sidebarDocked, onDocked] = useState(mql.matches)

    useEffect(() => {
        function mediaQueryChanged() {
            onDocked(mql.matches);
            onOpen(false)
        }
        
        mql.addListener(mediaQueryChanged)

        return function cleanup () { 
            mql.removeListener(mediaQueryChanged) 
        }
    })

    return (
        <div className="sidebar">
            <Sidebar
                sidebar={
                    <ul>
                        <li><NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink></li>
                        <div>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </div>
                    </ul>
                }
                open={sidebarOpen}
                docked={sidebarDocked}
                onSetOpen={(open) => onOpen(open)}
                styles={sidebarStyle }>
                <div className="navbar">
                    <div className="container">
                        <FaBars onClick={() => onOpen(true)} />
                    </div>
                </div>
                {props.children}
            </Sidebar>
        </div>
    )
}
