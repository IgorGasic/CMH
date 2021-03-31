import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Underline} from '../../GlobalStyle';
import {HiOutlineChevronDoubleRight} from 'react-icons/hi';
import {FaRegCalendarAlt} from 'react-icons/fa';

export const H2 = styled.h2`
    font-size:3rem;
    text-align:center;
    margin-top: 1.5rem;
`
export const ProjectsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom:50px;
    padding: 0 20px;

    @media screen and (max-width:1050px){
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:769px){
        display:flex;
        justify-content:center;
        align-items:center;
    }

`
export const ProjectContainer = styled.div`
    margin-bottom:2rem;
    width:500px;
`
export const ProjectImg = styled.div`
    height:400px;
`
export const Img = styled.img`
    height:100%;
    width:100%;
`
export const ProjectContent = styled.div`

`
export const H3 = styled.h3`
    font-weight:bold;
    padding:1rem 0 0.5rem 0;
`
export const H4 = styled.h4`
    color:silver;
    padding-bottom:0.5rem;
`
export const P = styled.p`
    padding-bottom:0.5rem;
`
export const ProjectLink = styled(Link)`
    text-decoration:none;
    color:#5c0099;
    font-weight:bold;
`
export const UnderLine = styled(Underline)`
    margin-top:-15px;
    margin-bottom:50px;
    width:12rem;
`
export const LinkIcon = styled(HiOutlineChevronDoubleRight)`
    color:#5c0099;
    margin-top:4px;
    margin-right:3px;
`
export const Links = styled.div`
    display:flex;
`
export const Content = styled.div`
    display:flex;
`
export const Calendar = styled(FaRegCalendarAlt)`
    color:silver;
    margin-top:4px;
    margin-right:5px;
`