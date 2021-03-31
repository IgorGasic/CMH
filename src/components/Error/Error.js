import React from 'react'
import {Container} from '../../GlobalStyle';
import errimg from '../../img/Error.png';
import {
    ErrorContainer, 
    H2, 
    Text, 
    BackLink, 
    ErrorImg, 
    BackToHome, 
    ErrorImgWrapper} from './ErrorStyled';

const Error = () => {
    return (
        <>
            <Container>
                <ErrorContainer>
                    <H2>Upppps</H2>
                    <Text>Stranica nije pronadjena, vratite se na pocetnu</Text>
                    <BackLink to="/"><BackToHome /></BackLink>
                    <ErrorImgWrapper>
                        <ErrorImg src={errimg} />
                    </ErrorImgWrapper>
                </ErrorContainer>
            </Container>
        </>
    )
}

export default Error
