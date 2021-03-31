import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Underline} from '../../../GlobalStyle';

export const Section = styled.section`
    width:100%;
    margin-left:auto;
    margin-right:auto;
    padding-left:50px;
    padding-right:50px;
    max-width:1550px;
    min-height:70vh;
    margin-top: 100px;
    margin-bottom:100px;
`
export const UnionRow = styled.div`
    display:flex;
    margin:0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;

    @media screen and (max-width:1050px){
        display:flex;
        flex-direction:column;
    }

    @media screen and (max-width:769px){
        display:flex;
        flex-direction:column;
    }
`
export const UnionColumn = styled.div`
    margin-bottom:15px;
    padding-left:15px;
    padding-right:15px;
    flex:1;
    max-width:50%;
    flex-basis:50%;

    @media screen and (max-width: 1050px){
        max-width:80%
    }

    @media screen and (max-width: 769px){
        max-width:100%;
    }

    @media screen and (max-width: 468px){
        max-width:100%;
        flex-basis:100%;
        display:flex;
        justify-content:center;
    }
`
export const UnionContent = styled.div`
    color:black;
    position: relative;
    text-align:center;

    @media screen and (max-width:468px){
        margin-bottom:20px;
    }
`
export const Title = styled.h3`
    padding-bottom:20px;
    font-size:3rem;
`
export const Text = styled.p`
    padding-bottom:30px;
    font-size:2rem;
    margin-top:50px;
    text-align:center;

    @media screen and (max-width: 468px){
        max-width:320px;
        margin-left:0px;
        font-size:1.5rem;
    }
`
export const UnionImg = styled.div`
    display:flex;
    justify-content:flex-end;

    @media screen and (max-width:1050px){
        margin-top:60px;
    }

    @media screen and (max-width:769px){
        margin-top:60px;
    }

    @media screen and (max-width:468px){
        padding-top:40px;

    }
`
export const Img = styled.img`
    padding-right:0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:750px;

`
export const UnionLink = styled(Link)`
    text-decoration:none;
    color:#fff;
    background:linear-gradient(90deg, rgba(76,4,102,1) 0%, rgba(120,13,157,1) 50%, rgba(166,7,223,1) 100%);
    border:none;
    border-radius:20px;
    padding:20px 65px 20px 65px;
    position: absolute;
    left:220px;
    font-size:1.5rem;

    @media screen and (max-width: 1600px){
        left:230px;
    }
    @media screen and (max-width: 1337px){
        left:170px;
    } 
    @media screen and (max-width:1050px){
        left:240px;
    }
    @media screen and (max-width:769px){
        left:210px;
    }
    @media screen and (max-width:468px){
        font-size:1rem;
        padding:10px 35px;
    }
    @media screen and (max-width:417px){
        left:85px;
    }
    @media screen and (max-width:376px){
        left:65px;
    }
    @media screen and (max-width:361px){
        left:55px;
    }
    @media screen and (max-width:321px){
        left:35px;
    }
`

export const UnderLine = styled(Underline)`
    margin-top:-35px;
    width:10rem;
`