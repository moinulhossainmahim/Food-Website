import React, { Component } from 'react'
import ImgOne from '../../images/img1.jpg'
import AboutModule from './About.module.css'

class About extends Component {
    render() {
        return(
            <section className={AboutModule.about} id="about">
                <div className={AboutModule.row}>
                    <div className={AboutModule.col__50}>
                        <h2 className={AboutModule.title__text}><span>A</span>bout Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={AboutModule.col__50}>
                        <div className={AboutModule.img__box}>
                            <img src={ImgOne} alt="ImgOne"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About