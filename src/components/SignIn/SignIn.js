import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Navbar, Form, Button } from 'react-bootstrap'
import { Route , useHistory } from 'react-router-dom';

import {getLoginPath} from '../../utils/paths'

import Topnav from '../Tobnav';
import './SignIn.scss';

const SignIn = () => {
    const history = useHistory()

    const [signInClicked, setSignInClicked] = useState(false)
    const [schoolName, setSchoolName] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    
    const handleSignIn = () => {
        if (schoolName.length > 0 && password.length > 0) {
            

        } if(schoolName.length === 0) {
            setEmailError(true)
        }
       
        if(password.length === 0) {
            setPasswordError(true)
        }
    }

    const handleSchoolName = e => setSchoolName(e.target.value)

    const handlePassword = (e) => {
        
        setPassword(e.target.value)
        e.persist()
        e.preventDefault()
    }

    const SignInHomeView = () => (
        <Container fluid className=''>
            <Navbar className='signin-navbar justify-content-between'>
                <Col className='signin-navbar-logo'>
                    <Image
                        src='https://i.ibb.co/JpbB79Q/prime-video-2.png'
                        alt='amazon-prime'
                        className='amazon-logo'
                    />
                </Col>
                <Col onClick={() => setSignInClicked(true)} className='justify-content-right sign-in-nav-button'>
                    Sign In
                </Col>
            </Navbar>
        </Container>
    )

    const SignInView = () => (
        <Container className='sign-in-container'>
            <Col className='sign-in-icon'>
                <Image
                    src='https://i.ibb.co/zVthJMv/Prime-Video-Logo.png'
                    alt='prime-video'
                    className='amazon-login-header-icon'
                />
            </Col>
            <Card className='sign-in-card'>
                <Col className='sign-in-card-contents'>
                    <Col className='sign-in-card-header-text'>
                        Sign-In
                    </Col>
                    <Col className='sign-in-card-input-fields'>
                        <Form.Label className='sign-in-email-input-label'>Email or mobile phone number</Form.Label>
                        <Form.Control
                            className='sign-in-email-input border-0 p-2'
                            type='text'
                            placeholder=''
                            value={schoolName}
                            onChange={handleSchoolName}
                        />
                        {emailError ? 
                        <Col className='email-alert'>
                             Enter your email or mobile phone number
                        </Col>
                        :''}

                        <Col className='password-label'>
                            <Form.Label className='sign-in-password-input-label'>Password</Form.Label>
                            <Form.Label className='sign-in-forgot-password'>Forgot your password?</Form.Label>
                        </Col>
                        <Form.Control
                            className='sign-in-password-input border-0 p-2'
                            type='text'
                            placeholder=''
                            value={password || ''}
                            onChange={handlePassword}
                        />
                        {passwordError ? <Col className='password-alert'>
                        Enter your password
                        </Col>
                        :''}
                    </Col>

                    <Col className='sign-in-button-wrap'>
                        <Button onClick={handleSignIn} className='sign-in-button'>
                            Sign-In
                        </Button>
                    </Col>

                    <Col className='sign-in-card-conditional-statement'>
                        By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a>.
                    </Col>

                    <Col className='keep-me-signed-in'>
                        <Form.Control
                            className='keep-me-signed-in-checkbox border-0 p-2'
                            type='checkbox'
                        // onChange={props.handleSchoolName}
                        />
                        <span className='keep-me-signed-in-text'>Keep me signed in.<a className='keep-me-signed-in-details'>Details <span className='keep-me-signed-in-caret'><i class="fa fa-caret-down"></i></span></a></span>
                    </Col>



                    <div class="new-to-amazon-divider-break">
                        <h5 className='new-to-amazon-divider-text'>New to Amazon?</h5>
                    </div>

                    <Col className='sign-in-create-account'>
                        <Button className='sign-in-create-account-button'>
                            Create your Amazon account
                        </Button>
                    </Col>

                </Col>
            </Card>
        </Container>
    )

    return signInClicked ? <SignInView/> : <SignInHomeView />
}

export default SignIn;
