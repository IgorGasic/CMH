import React from 'react';
import {title, text, img, link} from '../../../data/ThirdSectionData';
import {
    Section, 
    UnionRow, 
    UnionColumn, 
    Title, 
    Text, 
    UnionContent, 
    UnionLink, 
    UnionImg, 
    Img, 
    UnderLine} from './ThirdSectionStyled';
const ThirdSection = () => {
    return (
        <>
            <Section>
                <UnionRow>
                    <UnionColumn>
                            <UnionContent>
                            <Title>{title}</Title>
                            <UnderLine />
                            <Text>{text}</Text>
                            <UnionLink to='/savez'>{link}</UnionLink>
                        </UnionContent>
                    </UnionColumn>
                    <UnionColumn>
                        <UnionImg>
                            <Img src={img}/>
                        </UnionImg>
                    </UnionColumn>
                </UnionRow>
            </Section>
        </>
    )
}

export default ThirdSection
