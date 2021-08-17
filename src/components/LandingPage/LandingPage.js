import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';

import Toptabs from '../toptabs';
import './LandingPage.scss'

const LandingPage = (props) => {
    return (
        <>
        <Container>
        <Toptabs openHeaderMenu={props.openHeaderMenu}/>
            <Col className='primary-banner-area'>
                <Col className='left-banner-icon-space'>
                   <Image className='left-banner-icon' src='https://i.ibb.co/QnSgwZ0/pnghut-arrows-icon-left-arrow-back-material-property-logo.png'/>
                </Col>
                <Image className='primary-banner' src='https://bingeddata.s3.amazonaws.com/uploads/2021/07/Shershaah-1.jpg'/>
                <Col className='right-banner-icon-space'>
                    <Image className='right-banner-icon' src='https://i.ibb.co/1GKRPC3/pngwing-com.png'/>
                </Col>
            </Col>
            <Col className='continue-watching-area'>
                <Col className='continue-watching-text'>
                  Continue Watching
                </Col>
               
            </Col>
        </Container>
        </>
    );
}

export default LandingPage;