import React, { useState } from 'react';
import { Container, Col, Image } from 'react-bootstrap';

import Toptabs from '../toptabs';
import './LandingPage.scss'

const LandingPage = (props) => {
    const [bannerIndex, setBannerIndex] = useState(0);
    
    const handleClickBannerNavigation = (event) => {
        event===0 ? setBannerIndex(bannerIndex-1): setBannerIndex(bannerIndex+1)
    }
    console.log("HERE HERE")
    return (
        <>
        <Container>
        <Toptabs openHeaderMenu={props.openHeaderMenu}/>
            <Col className='primary-banner-area'>
                <Col onClick={() => handleClickBannerNavigation(0)} className='left-banner-icon-space'>
                   <Image className='left-banner-icon' src='https://i.ibb.co/QnSgwZ0/pnghut-arrows-icon-left-arrow-back-material-property-logo.png'/>
                </Col>
                <Image className='primary-banner' src='https://static.toiimg.com/photo/83206190.cms'/>
                <Col onClick={() => handleClickBannerNavigation(1)} className='right-banner-icon-space'>
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