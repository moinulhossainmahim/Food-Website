import React, {Component} from 'react'
import ExpertModule from './Expert.module.css'
import Paragraph from './../Styled/StyledParagraph'
import Heading from './../Styled/StyledHeading'
import Spaned from './../Styled/StyledSpan'
import Styledtitle from './../Styled/StyledDiv'

import ExpertOne from './../../images/expert1.jpg'
import ExpertTwo from './../../images/expert2.jpg'
import ExpertThree from './../../images/expert3.jpg'
import ExpertFour from './../../images/expert4.jpg'

class Expert extends Component {
    render() {
        return(
            <section className={ExpertModule.expert} id="expert">
                <Styledtitle>
                    <Heading>Our Kitchen <Spaned>E</Spaned>xpert</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </Styledtitle>
                <div className={ExpertModule.content}>
									<div className={ExpertModule.box}>
										<div className={ExpertModule.img__box}>
											<img src={ExpertOne} alt="ExpertOne" />
										</div>
										<div className={ExpertModule.text}>
											<h3>Someone Famous</h3>
										</div>
									</div>
									<div className={ExpertModule.box}>
										<div className={ExpertModule.img__box}>
											<img src={ExpertTwo} alt="ExpertTwo" />
										</div>
										<div className={ExpertModule.text}>
											<h3>Someone Famous</h3>
										</div>
									</div>
									<div className={ExpertModule.box}>
										<div className={ExpertModule.img__box}>
											<img src={ExpertThree} alt="ExpertThree" />
										</div>
										<div className={ExpertModule.text}>
											<h3>Someone Famous</h3>
										</div>
									</div>
									<div className={ExpertModule.box}>
										<div className={ExpertModule.img__box}>
											<img src={ExpertFour} alt="ExpertFour" />
										</div>
										<div className={ExpertModule.text}>
											<h3>Someone Famous</h3>
										</div>
									</div>
                </div>              
            </section>
        )
    }
}

export default Expert