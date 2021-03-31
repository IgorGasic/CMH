import styled from 'styled-components';
import hero from '../../../img/hero.jpg';

export const HeroContainer = styled.div`
    background: url(${hero});
    height:100vh;
    margin-top:-70px;
    background-position:center;
    background-size:100% 110%;
`
export const HeroContent = styled.div`
    min-height:400px;
    padding: 250px 0 0 200px;
    box-sizing:border-box;
    max-width:900px;

    @media screen and (max-width:1050px){
        padding-top:400px;
        margin-left:-70px;
    }

    @media screen and (max-width:769px){
        margin-left:-120px;
    }

    @media screen and (max-width:468px){
        max-width:300px;
        padding: 200px 0 0 0;
        margin-left:0;
    }
`
export const HeroItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    max-height:100%;
    padding: 0 2rem;
    max-width:500px;
    text-transform:uppercase;
    line-height:0.9;
    font-weight:bold;
    color:#fff;
    margin-bottom:-10px;

    @media screen and (max-width:1050px){
    }

    @media screen and (max-width:468px){
        max-width:350px;
        margin-bottom:-20px;
        padding-left:45px;
    }
`
export const HeroH1 = styled.h1`
    font-size:3rem;
    margin-bottom:1rem;
    letter-spacing:7px;
    color: #b3ccff;

    @media screen and (max-width:1050px){
        font-size:4rem;
    }

    @media screen and (max-width:768px){
        font-size:3rem;
    }

    @media screen and (max-width:468px){
        font-size:1.7rem;
    }
`
export const HeroP = styled.p`
    font-size:1.5rem;
    margin-bottom:2rem;
    background: -webkit-linear-gradient(#6699ff, #5c0099);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width:1050px){
        font-size:2rem;
    }
    @media screen and (max-width:768px){
        font-size:1.5rem;
    }
    
    @media screen and (max-width:468px){
        font-size:1rem;
    }
`
export const HeroH1Hub = styled(HeroH1)`
    margin-top:-20px;
    font-size:8rem;
    margin-left:-5px;
    border-bottom:7px solid #5c0099;
    border-right: 5px solid #5c0099;
    padding-right:120px;
    background: -webkit-linear-gradient(#6699ff, #5c0099);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width:1050px){
        font-size:12rem;
    }

    @media screen and (max-width:768px){
        font-size:8rem;
    }

    @media screen and (max-width:468px){
        font-size:5rem;
        border-bottom:none;
        border-right:none;
        margin-top:0;
        margin-left:-3px;
    }
`