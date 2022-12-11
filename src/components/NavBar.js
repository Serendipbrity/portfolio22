import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    // detect/keep track of which link we are on
    const [activeLink, setActiveLink] = useState('home');
    // detect/keep track of when the user scrolls
    const [scrolled, setScrolled] = useState(false);
    // useEffect triggered once scroll starts
    useEffect(() => {
        // function to determine what happens on scroll
        const onScroll = () => {
            // if user has scrolled 50px (about the size of the banner) vertically, use effect
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                // otherwise no effect triggered
                setScrolled(false)
            }
        }
        // function onScroll called on "scroll"
        window.addEventListener("scroll", onScroll);
        // remove event listener when the component is removed from the dom
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
}

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* highlight which link is active, onClick to update state when links are pressed */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={navIcon1} alt="" /></a>
                            <a href='#'><img src={navIcon2} alt="" /></a>
                            <a href='#'><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}