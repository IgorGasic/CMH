import styled from 'styled-components';
import {Container} from '../../../GlobalStyle';
import {FaFacebookSquare, FaGlobe, FaInstagramSquare} from 'react-icons/fa';

export const SavezContainer = styled(Container)`
    display:flex;
    flex-wrap:wrap;
    padding-bottom:100px;

    @media screen and (max-width:1050px){
        display:flex;
        justify-content:center;
        align-items:center;
    }

`
export const ImgBox = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    transition: 0.5s;

`
export const Img = styled.img`
    position:absolute;
    top:0;
    left:0;
    bottom:40px;
    width: 100%;
    height: 100%;
    object-fit:cover;
    margin-top:75px;

    @media screen and (max-width:468px){
        padding-top:30px;

    }
`
export const H3 = styled.h3`
    margin:0;
    padding:0;
    font-size:1.4rem;
    text-align:center;
    margin-bottom:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    line-height:1;

    @media screen and (max-width:468px){
        font-size:1.2rem;
        padding-top:0px;
    }
`
export const Par = styled.p`
    margin: 10px 0 0;
    padding: 0;
    opacity: 0;
    line-height: 1.2em;
    transition: 0.5s;
    text-align:center;
    color:#fff;
    font-size:1.1rem;
    
    @media screen and (max-width:468px){
        font-size:0.9rem;
    }
`
export const FaceIcon = styled(FaFacebookSquare)`
    height:40px;
    width:40px;
`
export const WebSite = styled(FaGlobe)`
    height:35px;
    width:35px;
    padding-bottom:3px;
`
export const InstaIcon = styled(FaInstagramSquare)`
    height:40px;
    width:40px;
`
export const Content = styled.div`
    position:absolute;
    bottom: 50px;
    left: 15%;
    width: 70%;
    height:70px;
    background:#000;
    transition: 0.5s;
    overflow: hidden;
    padding: 15px;
    box-sizing:border-box;
    opacity:100%;
    border:none;

    &:hover{
        height:100%;
        width:100%;
        bottom:0;
        left:0;
        border-radius:10px;
    }

     & > ${Par}:hover{
        transition-delay: 0.5s;
        opacity:1;
    } 
    
`
export const Social = styled.a`
    text-decoration:none;
    color:#000;
    cursor: pointer;
`
export const Icons = styled.div`
    position: absolute;
    bottom: 1px;
`
export const Box = styled.div`
    position: relative;
    width:350px;
    height:500px;
    box-shadow: 0 30px 30px rgba(0,0,0,.5);
    margin: 0 20px;
    background:#fff;
    border-radius:10px;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top: 70px;
    
`