import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/me">About me</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/academic">Academic life</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/work">Professional achievements</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/thanks">Thanks</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
