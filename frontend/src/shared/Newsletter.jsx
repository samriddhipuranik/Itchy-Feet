import React from 'react'
import './newsletter.css';
import { Container, Col, Row} from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg = '6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                <div className="newsletter__input">
                    <input type='email' placeholder='Enter your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>Subscribe now to unlock a treasure trove of invaluable traveling information. Embark on journeys with confidence and make the most out of your explorations. Whether you're a seasoned globetrotter or a curious wanderer, our curated content will guide you through destinations, travel tips, insider secrets, and much more. Stay informed and inspired, subscribe today to embark on a world of adventure! </p>
                </div>
            </Col>
            <Col lg = '6' >
                <div className="newsletter__img">
                    <img src={maleTourist} alt=''/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
