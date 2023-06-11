import React from 'react'

import { NavLink } from 'react-router-dom'
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container,NavItem,Row } from 'reactstrap'

const nav_links  = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
];

const Header = () => {
  return (
    <header className="header">
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <div>
                            <h1>MultiMart</h1>
                            
                        </div>
                    </div>
                    <div className="navigation">
                        <ul className="menu">
                        {nav_links.map((item,index) =>(
                            <li className="nav__item" key={index}>
                                <NavLink
                                to={item.path} 
                                className={(navClass)=>
                                    navClass.isActive ? "nav__active" : ""
                                    }
                                >
                                {item.display}
                            </NavLink>
                        </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className="fav__icon"><i class="ri-heart-line"></i>
                        <span className="badge">4</span>
                        </span>
                        <span className="cart__icon"><i class="ri-shopping-bag-line"></i>
                        <span className="badge">2</span>
                        </span>
                        <span><motion.img whileTap={{scale:1.5}} src={userIcon} alt=''/></span>
                    </div>

                    <div className="mobile__menu">
                        <span>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>

                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header