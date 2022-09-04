import { SpatialTrackingSharp } from '@mui/icons-material';
import React from 'react'
import Lottie from 'react-lottie';
import { Container, Row, Col } from 'reactstrap';
import animationData from '../../lottie/landing_page_lottie.json'
import constants from '../../utils/strings';
import '../home/home.css'

export const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
  return (
    <div>
      <section>
        <Container>
          <Row className='home_content_row'>
            <Col lg='6' md='6'>
              <div className="home_content">
              <h2 className='mb-4'>
                Learn and write your tests anywhere and anytime
              </h2>
              <p className='mb-4'>
                {strings.HOME_TEXT}
              </p>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <Lottie  className="w-100"   options={defaultOptions}/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
