import styled from 'styled-components';
import {Underline} from '../../../GlobalStyle';

export const Section = styled.section`
    width:90vw;
    margin: 5rem auto;
    max-width:1170px;
`
export const Title = styled.div`
    text-align:center;
    margin-bottom:2rem;
`
export const H2 = styled.h2`
    font-size:3rem;
    display:flex;
    text-align:center;
    justify-content:center;
`
export const TeamContnainer = styled.div`
    margin: 0 auto;
    margin-top:4rem;
    width:80vw;
    height:550px;
    max-width:800px;
    text-align:center;
    position:relative;
    display:flex;
    overflow:hidden;
`
export const Img = styled.img`
    border-radius:50%;
    margin-bottom:1rem;
    width:300px;
    height:300px;
    object-fit:cover;
    border:6px solid black;
    box-shadow:0 5px 20px rgba(0, 0, 0, 0.8);

    @media screen and (max-width:468px){
        width:250px;
        height:250px;
    }
`
export const ArticleH4 = styled.h4`
    font-size:2rem;
    text-transform:uppercase;
    color:#000;
`
export const Text = styled.p`
    max-width:35em;
    margin: 0 auto;
    line-height:1.8;
    color: ${props => props.primary ? "#5c0099" : "#000"};
    font-size:${props => props.primary ? "1.2rem" : "1rem"};
`
export const Person = styled.article`
    &.ActivePerson{
        opacity:1;
        transform: translateX(0);
    }
    &.LastPerson{
        transform: translateX(-100%);
    }
    &.NextPerson{
        transform: translateX(-100%);
    }

    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity:0;
    transition:all 0.3s linear;
    padding-top:20px;

`
export const UnderLine = styled(Underline)`
    margin-top:-15px;
    width:11rem;
    align-items:center;
`