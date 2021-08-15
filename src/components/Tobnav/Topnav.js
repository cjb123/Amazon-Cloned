import React from 'react';
import { Nav, Navbar, Image, Container, Col, InputGroup, FormControl } from 'react-bootstrap';

import './Topnav.scss'

const Topnav = (props) => {
    const makeActiveElement = (key) => {
        console.log("KEYYY ", key)
        const element = document.getElementById(key);
        console.log('ELEMENT ', element)
        element.classList.add("active");
     }
    const handleSelectLink = (key) => {
           console.log('KEYYY!!! ', key)
           makeActiveElement(key)
    }
    return (
        <Container fluid className=''>
            <Navbar className='top-navbar justify-content-between'>
                <Image
                    src='https://i.ibb.co/JpbB79Q/prime-video-2.png'
                    alt='amazon-prime'
                    className='amazon-logo'
                />

                <Nav onSelect={handleSelectLink} className='nav-bar-tab-section'>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-link' eventKey='home' id='home'>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-link' eventKey='tvshow' id='tvshow'>
                            TV Shows
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-link' eventKey='movies' id='movies'>
                            Movies
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-bar-tabs'>
                        <Nav.Link className='nav-bar-link' eventKey='kids' id='kids'>
                            Kids
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Col className='search-textbox'>
                        {/* <InputGroup.Text className='search-text-icon'>@</InputGroup.Text> */}
                        <img className='search-text-icon' src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>        
                        <FormControl id="inlineFormInputGroup" className='search-text-form' placeholder="Username" />
                </Col>
            </Navbar>
        </Container>
    );
}

export default Topnav;