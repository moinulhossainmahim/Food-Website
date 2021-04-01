import React, { Component } from 'react'
import Styles from './Testimonials.module.css'

import Paragraph from './../Styled/StyledParagraph'
import Heading from './../Styled/StyledHeading'
import Spaned from './../Styled/StyledSpan'
import Styledtitle from './../Styled/StyledDiv'
import TestiOne from './../../images/testi1.jpg'
import TestiTwo from './../../images/testi2.jpg'
import TestiThree from './../../images/testi3.jpg'

class Testimonials extends Component {
  render() {
    return(
      <section className={Styles.testimonials} id="testimonials">
        <Styledtitle>
          <Heading white>They <Spaned>S</Spaned>aid About Us</Heading>
          <Paragraph white>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Styledtitle>
        <div className={Styles.content}>
          <div className={Styles.box}>
            <div className={Styles.img__box}>
              <img src={TestiOne} alt="TestiOne"/>
            </div>
            <div className={Styles.text}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 	labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 			laboris nisi ut aliquip ex ea commodo consequat.
              </p>
							<h3>Someone Famous</h3>
            </div>
          </div>
					<div className={Styles.box}>
            <div className={Styles.img__box}>
              <img src={TestiTwo} alt="TestiTwo" />
            </div>
            <div className={Styles.text}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 	labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 			laboris nisi ut aliquip ex ea commodo consequat.
              </p>
							<h3>Someone Famous</h3>
            </div>
          </div>
					<div className={Styles.box}>
            <div className={Styles.img__box}>
              <img src={TestiThree} alt="TestiThree" />
            </div>
            <div className={Styles.text}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 	labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 			laboris nisi ut aliquip ex ea commodo consequat.
              </p>
							<h3>Someone Famous</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Testimonials