import React from 'react';
import { Col, Image } from 'react-bootstrap'

import './Toptabs.scss';

function Toptabs(props) {
    if (props.openHeaderMenu) {
        return (
            <Col className='navbar-option-menu'>
                <Col className='navbar-option-menu-content'>
                    <Col className='navbar-option-menu-content-left'>
                        <ul className='navbar-option-menu-general-options'>
                            <li className='menu-option-item-1'>
                                Your Watchlist
                            </li>
                            <li className='menu-option-item-1'>
                                Account & Settings
                            </li>
                            <li className='menu-option-item-1'>
                                Watch Anywhere
                            </li>
                            <li className='menu-option-item-1'>
                                Help
                            </li>
                            <li className='menu-option-item-1'>
                                Not Chinmoy?
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='navbar-option-menu-profile-options'>
                            <li className='menu-option-item-2'>
                                <span><Image className='menu-home-icon' src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png'/></span>
                                <span className='menu-home-text'>Home</span>
                            </li >
                            <li className='menu-option-item-2'>
                            <span><Image className='menu-home-icon' src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png'/></span>
                            <span className='menu-home-text'>Kids</span>
                            </li>
                            <li className='menu-option-item-2'>
                            <span><Image className='menu-home-icon' src='https://i.ibb.co/4Wt4B5K/icons8-add-50.png'/></span>
                            <span className='menu-home-text'>Add new</span>   
                            </li>
                            <li className='menu-option-item-2'>
                                Manage profiles
                            </li>
                            <li className='menu-option-item-2'>
                                Learn more
                            </li>
                        </ul>
                    </Col>
                </Col>
            </Col>

        )
    }
    return ''

}

export default Toptabs;