import styled from 'styled-components';
import {Container} from '../../GlobalStyle';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;
    margin-top: 0px;
    padding-top:0px;
    position: sticky;
`

export const NavbarContainer = styled(Container)`
    display:flex;
    justify-content:space-between;
    height: 80px;

    ${Container}

`

export const NavLogo = styled(Link)`
    justify-self:flex-start;
    cursor: pointer;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#5c0099;
    font-size: 4rem;
    font-weight:600;
    font-style:italic;

    @media screen and (max-width: 1050px){
        font-size:5rem;
    }

    @media screen and (max-width: 760px){
        font-size: 3.3rem;
    }
    @media screen and (max-width: 468px){
        font-size: 3.3rem;
    }
`

export const MobileIcon = styled.div`
    display:none;
    color:#5c0099;

    @media screen and (max-width: 1050px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 25%);
    font-size: 2.5rem;
    cursor: pointer;
    width: 25px;
    margin-right:35px;
    }

    @media screen and (max-width: 486px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 25%);
    font-size: 2.5rem;
    cursor: pointer;
    width: 25px;
    margin-right:15px;
    }       
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align: center;

    @media screen and (max-width:1050px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:60vh;
        position: absolute;
        top: 80px;
        left:${({click})=>(click ? 0 : '-100%')};
        opacity: 100%;
        transition: all 0.5s ease;
        background: #000;
    }

    @media screen and (max-width:960px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:70vh;
        position: absolute;
        top: 80px;
        left:${({click})=>(click ? 0 : '-100%')};
        opacity: 100%;
        transition: all 0.5s ease;
        background: #000;
    }
    @media screen and (max-width:468px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:50vh;
        position: absolute;
        top: 80px;
        left:${({click})=>(click ? 0 : '-100%')};
        opacity: 100%;
        transition: all 0.5s ease;
        background: #000;
    }

`
export const NavItem = styled.li`
    max-height:50px;
    font-size:1.8rem;

    @media screen and (max-width:1050px){
        font-size:3rem;
        padding:3rem 0;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        font-size:2rem;
    }
    @media screen and (max-width: 468px){
        padding:0;
    }

`
export const NavLinks = styled(Link)`
    color: #5c0099;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.2rem 1rem;
    font-weight:bold;

    @media screen and (max-width: 960px){
        text-align:center;
        width: 100%;
        display: table;
        
    }
`
export const NavIcon = styled.img`
    height:100px;
    margin-right:-55px;
    margin-left:-55px;

    @media screen and (max-width:1050px){
        height:120px;
        margin-left:-90px;
    }
`