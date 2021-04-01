import React from 'react'
import BannerModule from './Banner.module.css'
import Btn from './../Styled/StyledBtn'

const Banner = () => {
    return(
        <section className={BannerModule.banner} id="banner">
            <div className={BannerModule.content}>
                <h2>Always Choose Good</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Btn href="#">Our Menu</Btn>
            </div>
        </section>
    )
}

export default Banner