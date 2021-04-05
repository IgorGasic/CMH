import styled from 'styled-components';
import {Underline} from '../../GlobalStyle';

export const AboutUsRow = styled.div`
    display:flex;
    margin:0 -15px -15px -15px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const AboutUsColumn = styled.div`
    margin-bottom:15px;
    padding-left:15px;
    padding-right:15px;
    flex:1;
    max-width:100%;
    flex-basis:100%;
`
export const Title = styled.h3`
    font-size:3rem;
    text-align:center;
    margin-top: 1.5rem;
    
    @media screen and (max-width:468px){
        font-size:2.4rem;
        margin-bottom:2px;
    }
`
export const Text = styled.p`
    max-width:${(props) => (props.large ? '1200px' : '540px')};
    padding-bottom:30px;
    font-size:1.2rem;
    margin-top:50px;
`
export const AboutUsImg = styled.div`
    padding-top:190px;
    max-width:655px;
    display:flex;
    justify-content:flex-end;

    @media screen and (max-width:468px){
        padding-top:0;
    }
`
export const Img = styled.img`
    padding-right:0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    min-height:350px;

`
export const UnderLine = styled(Underline)`
    width:15rem;
    margin-top:-15px;
`