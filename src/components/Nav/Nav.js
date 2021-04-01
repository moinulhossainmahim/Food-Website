import React, { Component } from 'react'
import NavModule from './Nav.module.css'

class Nav extends Component {
    render() {
        return(
            <nav>
                <a href="#" className={NavModule.logo}>Food<span>.</span></a>
                <div className={NavModule.menu__toggle}></div>
                <ul className={NavModule.navigation}>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#expert">Expert</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav