import React from 'react';
import {text, data} from '../../../data/FirstSectionData';
import {
    Section, 
    Cont, 
    TextPart, 
    Text, 
    ImgPart, 
    Img, 
    P,
    ContainerImg} from './FirstSectionStyled';


const FirstSection = () => {
    return (
        <>
        <Section>
            <Cont>
                <TextPart>
                    <Text>
                        {text}
                    </Text>
                </TextPart>                
            </Cont>
            <ContainerImg>
            {data.map((item)=>{
                    const {img, name, id} = item;
                    return <ImgPart key={id}>
                    <Img src={img} />
                    <P>{name}</P>
                </ImgPart>
                })}
            </ContainerImg>
        </Section>
        </>
    )
}

export default FirstSection
