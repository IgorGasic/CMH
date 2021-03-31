import React from 'react'
import {Container} from '../../GlobalStyle';
import {useGlobalContext} from '../../context';
import News from './News';
import {
    H2, 
    UnderLine, 
    NewsContainer} from './NewsStyled';

const NewsList = () => {
    const {news} = useGlobalContext();
    return (
        <>
            <Container>
                <H2>Vesti</H2>
                <UnderLine />
                <NewsContainer>
                    {news.map((item)=>{
                        return <News key={item.id} {...item} />
                    })}
                </NewsContainer>
            </Container>
        </>
    )
}

export default NewsList
