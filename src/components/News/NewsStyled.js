import styled from 'styled-components';
import {Underline} from '../../GlobalStyle';
import {Link} from 'react-router-dom';

export const H2 = styled.h2`
    font-size:3rem;
    text-align:center;
    margin-top: 1.5rem;
`
export const NewsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:50px;
    padding: 0 20px;
    position:relative;
`
export const NewsContaineR = styled.div`
    margin-bottom:2rem;
    max-width:1000px;
    display:flex;

    @media screen and (max-width:468px){
        display:flex;
        flex-direction:column;
    }
`
export const NewsImg = styled.div`
    height:600px;
    width:650px;
    padding:5px;

    @media screen and (max-width:468px){
        max-width:350px;
        max-height:400px;
    }
    @media screen and (max-width:321px){
        max-width:300px;
    }
`
export const Img = styled.img`
    height:100%;
    width:100%;
`
export const NewsContent = styled.div`
    padding-left:20px;
    max-width:350px;

    @media screen and (max-width:321px){
        max-width:300px;
    }
`
export const H3 = styled.h3`
    font-weight:bold;
    padding:0 0 0.5rem 0;
    font-size:2rem;

    @media screen and (max-width:468px){
        font-size:1.5rem;
    }
`
export const P = styled.p`
    padding-bottom:0.5rem;
    font-size:1.1rem;
`
export const NewsLink = styled(Link)`
    text-decoration:none;
    color:#fff;
    font-size:1.2rem;
    background:linear-gradient(90deg, rgba(76,4,102,1) 0%, rgba(120,13,157,1) 50%, rgba(166,7,223,1) 100%);
    border:none;
    border-radius:10px;
    padding:20px 40px;
    margin-top:45px;

    @media screen and (max-width:468px){
        margin-bottom:15px;
        padding:15px 30px;

    }
`
export const UnderLine = styled(Underline)`
    margin-top:-15px;
    margin-bottom:50px;
    width:8rem;
`
export const Links = styled.div`
    display:flex;
`