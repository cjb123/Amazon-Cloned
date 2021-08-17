import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Image, Container, Col, InputGroup, FormControl } from 'react-bootstrap';

import Toptabs from '../toptabs';
import './Topnav.scss'

const Topnav = (props) => {
    const [keyName, setKeyName] = useState('')

    const makeElementActive = (key) => {
        const element = document.getElementById(key);
        element.classList.add("active");
        const prevElement = document.getElementById(keyName);
        prevElement ? prevElement.classList.remove("active") : console.log('app launched');
        setKeyName(key)
    }
    const handleSelectLink = (key) => {
        makeElementActive(key)
    }

    useEffect(() => {
        makeElementActive('home')
    }, [])

    return (
        <>
        <Container fluid className=''>
            <Navbar className='top-navbar justify-content-between'>
                <Image
                    src='https://i.ibb.co/JpbB79Q/prime-video-2.png'
                    alt='amazon-prime'
                    className='amazon-logo'
                />

                <Nav onSelect={handleSelectLink} className='nav-bar-tab-section'>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-tabs-link' eventKey='home' id='home'>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-tabs-link' eventKey='tvshow' id='tvshow'>
                            TV Shows
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-tabs-link' eventKey='movies' id='movies'>
                            Movies
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-tabs-link' eventKey='kids' id='kids'>
                            Kids
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Col className='nav-search-textbox'>
                    <img className='search-text-icon' src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" />
                    <FormControl id="inlineFormInputGroup" className='search-text-form' placeholder="Username" />
                </Col>
                <Col className='nav-user' onClick={props.handleOpenHeaderMenu}>
                    <Image className='nav-user-icon' src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png' />
                    <span className='nav-user-name'>{'Chin..'.toLowerCase()}</span>
                </Col>
                <Col className='caret-icon' onClick={props.handleOpenHeaderMenu}><i class="fa fa-caret-down"></i></Col>
            </Navbar>    
        </Container>
        </>
    );
}

export default Topnav;