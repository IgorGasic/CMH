import React, {useState} from 'react';
import logo from './logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks} from './NavbarStyled';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={()=>scroll.scrollToTop()}>
                        <NavIcon src={logo}/>
                        CMH
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Početna
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/onama'>
                                O nama
                            </NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/savez'>
                                Savez
                            </NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/projekti'>
                                Projekti
                            </NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/vesti'>
                                Vesti
                            </NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/kontakt'>
                                Kontakt
                            </NavLinks> 
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
