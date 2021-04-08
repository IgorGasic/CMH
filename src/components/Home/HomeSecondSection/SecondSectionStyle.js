import styled from 'styled-components';

export const Section = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:#000;

    @media screen and (max-width: 1335px){
        display:flex;
        flex-wrap:wrap;
    }

    @media screen and (max-width:768px){
        padding:0;
    }

    @media screen and (max-width: 400px){
        padding:0;
    }
`
export const Box = styled.div`
    position:relative;
    width:300px;
    height:650px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#060c22;
    margin:40px;
    box-shadow:-1px 3px 21px 4px rgba(76,42,156,0.8);
    transition:ease-in-out 0.5s;
    filter:blur(0px);
    border:none;
    border-radius:6%;

    &:hover{
        transition:ease-in-out 0.5s;
        transform:scale(1.1);
        filter:blur(0);
        box-shadow:-1px 3px 21px 12px rgba(76,42,156,0.8);
    }

    @media screen and (max-width:415px){
        margin:40px auto;
    }
`
export const Img = styled.img`
    position:absolute;
    height:50%;
    width:90%;
    top:0;
    left:1;
`
export const Glass = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:47%;
    height:100%;
    display:block;
    background:rgba(76,65,156,.1);
    pointer-events:none;
    border-radius:9% 0 0 9%;
`
export const Content = styled.div`
    padding:20px;
    color:#fff;
    margin-top:180px;
`
/* export const H2 = styled.h2`
    font-weight:bold;
    font-size:2rem;
    text-align:center;
` */
export const P = styled.p`
    text-align:center;
    font-size:1.5rem;
`


