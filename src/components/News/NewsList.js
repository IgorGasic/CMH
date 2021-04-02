import React from 'react'
import {Container} from '../../GlobalStyle';
import {data} from '../../data/NewsData';
import News from './News';
import {
    H2, 
    UnderLine, 
    NewsContainer} from './NewsStyled';

const NewsList = () => {

    return (
        <>
            <Container>
                <H2>Vesti</H2>
                <UnderLine />
                <NewsContainer>
                    {data.map((item)=>{
                        return <News key={item.id} {...item} />
                    })}
                </NewsContainer>
            </Container>
        </>
    )
}

export default NewsList
