import React, { Component } from 'react'
import MenuModule from './Menu.module.css'

import Paragraph from './../Styled/StyledParagraph'
import Heading from './../Styled/StyledHeading'
import Spaned from './../Styled/StyledSpan'
import Styledtitle from './../Styled/StyledDiv'
import BtnDiv from './../Styled/StyledBtnDiv'
import Btn from './../Styled/StyledBtn'

import MenuImgOne from './../../images/menu1.jpg'
import MenuImgTwo from './../../images/menu2.jpg'
import MenuImgThree from './../../images/menu3.jpg'
import MenuImgFour from './../../images/menu4.jpg'
import MenuImgFive from './../../images/menu5.jpg'
import MenuImgSix from './../../images/menu6.jpg'


class Menu extends Component {
    render() {
        return(
            <section className={MenuModule.menu} id="menu">
                <Styledtitle>
                    <Heading>Our <Spaned>M</Spaned>enu</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </Styledtitle>
                <div className={MenuModule.content}>
                    <div className={MenuModule.box}>
                        <div className={MenuModule.img__box}>
                            <img src={MenuImgOne} alt="MenuImgOne" />
                        </div>
                        <div className={MenuModule.text}>
                            <h3>Special Salads</h3>
                        </div>
                    </div>
                    <div className={MenuModule.box}>
                        <div className={MenuModule.img__box}>
                            <img src={MenuImgTwo} alt="MenuImgTwo" />
                        </div>
                        <div className={MenuModule.text}>
                            <h3>Special Soups</h3>
                        </div>
                    </div>
                    <div className={MenuModule.box}>
                        <div className={MenuModule.img__box}>
                            <img src={MenuImgThree} alt="MenuImgThree" />
                        </div>
                        <div className={MenuModule.text}>
                            <h3>Special Pasta</h3>
                        </div>
                    </div>
                    <div className={MenuModule.box}>
                        <div className={MenuModule.img__box}>
                            <img src={MenuImgFour} alt="MenuImgFour" />
                        </div>
                        <div className={MenuModule.text}>
                            <h3>Special Salads</h3>
                        </div>
                    </div>
                    <div className={MenuModule.box}>
                        <div className={MenuModule.img__box}>
                            <img src={MenuImgFive} alt="MenuImgFive" />
                        </div>
                        <div className={MenuModule.text}>
                            <h3>Special Soup</h3>
                        </div>
                    </div>
                    <div className={MenuModule.box}>
                        <div className={MenuModule.img__box}>
                            <img src={MenuImgSix} alt="MenuImgSix" />
                        </div>
                        <div className={MenuModule.text}>
                            <h3>Special Pasta</h3>
                        </div>
                    </div>
                </div>
                <BtnDiv className={MenuModule.title}>
                    <Btn href="#">View All</Btn>
                </BtnDiv>
            </section>
        )
    }
}

export default Menu