import React from 'react'
import Styles from './Contact.module.css'

import Paragraph from './../Styled/StyledParagraph'
import Heading from './../Styled/StyledHeading'
import Spaned from './../Styled/StyledSpan'
import Styledtitle from './../Styled/StyledDiv'

const Contact = () => {
  return(
    <section className={Styles.contact} id="contact">
      <Styledtitle>
        <Heading><Spaned>C</Spaned>ontact</Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
      </Styledtitle>
      <div className={Styles.contact__form}>
        <h3>Send Message</h3>
        <div className={Styles.input__box}>
          <input type="text" placeholder="Name" />
        </div>
        <div className={Styles.input__box}>
          <input type="text" placeholder="Email" />
        </div>
        <div className={Styles.input__box}>
          <textarea placeholder="Name"></textarea>
        </div>
        <div className={Styles.input__box}>
          <input type="submit" value="Send" />
        </div>
      </div>
    </section>
  )
}

export default Contact