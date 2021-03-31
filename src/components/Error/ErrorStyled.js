import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';

export const ErrorContainer = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
export const H2 = styled.h2`
    font-size:3rem;
`
export const BackToHome = styled(AiOutlineHome)`
    height:50px;
    width:50px;
`
export const Text = styled.p`
    color:#000;
    font-size:2rem;
    text-align:center;
`
export const BackLink = styled(Link)`
    text-decoration:none;
    color:black;

`
export const ErrorImgWrapper = styled.div`
    height:500px;

    @media screen and (max-width:468px){
        height:300px;
    }
`
export const ErrorImg = styled.img`
    height:100%;
`