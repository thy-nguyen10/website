import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../Accsets/Logo_Arouse_01.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 756);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='supper-header'>
            <div className="sub-header">
                <p>Free 2-day shipping on US orders 99k</p>
            </div>
            <div className="main-header">
                {isMobile ? <MobileNavbar logo={logo} /> : <DesktopNavbar logo={logo} />}
            </div>
        </div>
    );
};

// Component dành cho mobile
const MobileNavbar = ({ logo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        setIsHovered(false);
    };

    return (
        <Navbar expand="lg" className="custom-nav">
            <Container 
                className="d-flex justify-content-between align-items-center"
                
            >
                <Navbar.Brand href="#home"
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              className="logo-container">
                    <div className={`logo-wrapper ${isHovered ? 'hovered' : ''}`}>
                        <img src={logo} alt="Logo" className="logo-img" />
                        <p className="hover-text">YOU LOOK GOOD</p>
                    </div>
                </Navbar.Brand>
                {!isOpen && (
                    <button className="bnt-toggle" onMouseEnter={handleMouseEnter}
                    >
                        ☰
                    </button>
                )}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
                    <li><a href="#home">Shop</a></li>
                    <li><a href="#about">Collections</a></li>
                    <li><a href="#services">Search</a></li>
                    <li><a href="#contact">Login</a></li>
                    <li><a href="#cart">Cart(0)</a></li>
                </ul>
            </Container>
        </Navbar>
    );
};

// Component dành cho desktop
const DesktopNavbar = ({ logo }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (

    <div className="box-header">
        <div className="left-nav">
            <p>Shop</p>
            <p>Collections</p>
        </div>
        <div className="logo-web"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
             <div className={`logo-wrapper ${isHovered ? 'hovered' : ''}`}>
                    <img src={logo} alt="Logo" className="logo-img" />
                    <p className="hover-text">YOU LOOK GOOD</p>
                </div>
        </div>
        <div className="right-nav">
            <p>Search</p>
            <p>Login</p>
            <p>Cart(0)</p>
        </div>
    </div>
);
};

export default Header;
