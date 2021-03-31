import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
    }
`
export const Container = styled.div`
    z-index:1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width:991px){
    padding-right: 30px;
    padding-left: 30px;
    };
`

export const Underline = styled.div`
    height:0.50rem;
    background:linear-gradient(90deg, rgba(76,4,102,1) 0%, rgba(120,13,157,1) 50%, rgba(166,7,223,1) 100%); 
    margin-left:auto;
    margin-right:auto;
`
export default GlobalStyle;