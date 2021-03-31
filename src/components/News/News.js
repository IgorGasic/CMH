import React from 'react'
import {
    NewsContaineR, 
    NewsImg, 
    Img, 
    NewsContent, 
    H3, 
    Links, 
    NewsLink,
    P} from './NewsStyled';


const News = ({id, title, text, thumb}) => {
    return (
        <>
            <NewsContaineR>
                <NewsImg>
                    <Img src={thumb} alt={title}/>
                </NewsImg>
                <NewsContent>
                    <H3>{title}</H3>
                    <P>{text.substr(0,400)}...</P>
                    <Links>
                    <NewsLink to={`/projekat/${id}`}>Detaljnije</NewsLink>
                    </Links>
                </NewsContent>
            </NewsContaineR> 
        </>
    )
}

export default News
