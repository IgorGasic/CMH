import styled from 'styled-components';
import {Underline} from '../../../GlobalStyle';

export const H2 = styled.h2`
    font-size:3rem;
    text-align:center;
    margin-top: 1.5rem;
    
    @media screen and (max-width:468px){
        font-size:2.4rem;
        margin-bottom:2px;
    }
`
export const Text = styled.p`
    font-size:1.2rem;
    text-align:center;
`
export const UnderLine = styled(Underline)`
    margin-top:-15px;
    margin-bottom:30px;
    width:12rem;
`