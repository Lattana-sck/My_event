import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import{HashLink as Link} from 'react-router-hash-link'

function Navbar({setLoginUser}) {
    return (
        <div>
            <nav className="navbar">
            <NavLink to="/" exact>
            <h1 className="navbar-title">MY EVENTS</h1>
            </NavLink>
            <NavLink to="/login" exact>
            <FontAwesomeIcon className="user-navbar" icon={faUser}></FontAwesomeIcon>
            </NavLink>
            <button className="" onClick={() => setLoginUser({})}>logout</button>
            </nav>
        </div>
    )
}

export default Navbar
