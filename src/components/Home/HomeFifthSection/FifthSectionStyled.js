import styled from 'styled-components';


export const Section = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:50vh;
    background:#1e1e1e;
`
export const Container = styled.div`
    width: 1000px;
    position:relative;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

    @media screen and (max-width:769px){
        display:flex;
        align-items:center;
        justify-content:center;
    }
`
export const Img = styled.img`
    max-width:100px;
`
export const P = styled.p`
    color:#000;
    padding:0 10px 0 20px;
    text-align:center;
    font-size:1.3rem;
    font-weight:${(props)=>props.primary ? "bold":"regular"};

    @media screen and (max-width: 468px){
        font-size:1.1rem;
    }
`
export const H3 = styled.h3`
    margin:10px 0 0;
    color:#fff;
    text-align:center;
    font-size:1.5em;
`
export const Content = styled.div`

`
export const FaceOne = styled.div`
    top:0;
    left:0;
    width:100%;
    height:100%;
    transition: 0.5s;
    background:#333;
    display:flex;
    justify-content:center;
    align-items:center;
    transform-origin:bottom;
    position:absolute;
`
export const FaceTwo = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    transition: 0.5s;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    transform-origin: top;
    transform:translateY(100%) rotateX(90deg);
    color:#000;
`
export const Card = styled.div`
    position:relative;
    width:400px;
    height:200px;

    &:hover ${FaceOne} {
    transform:translateY(-100%) rotateX(90deg);
    background:#5c0099;
    }

    &:hover ${FaceTwo}{
    transform: translateY(0%) rotateX(0);
    }

    @media screen and (max-width: 769px){
        margin:40px auto;
    }

    @media screen and (max-width:468px){
        margin:40px auto;
        width:300px;
    }
`