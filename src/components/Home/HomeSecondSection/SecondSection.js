import React from 'react'
import {
    Section, 
    Box, 
    Glass, 
    Content,
    Img,
    P} from './SecondSectionStyle';
import {data} from '../../../data/SecondSectionData';

const SecondSection = () => {
    return (
        <>
            <Section>
            {data.map((item)=>{
                const {id,title,text,img} = item;
                return <Box key={id}>
                <Img src={img}/>
                <Glass></Glass>
                <Content>
                 {/* <H2>{title}</H2> */}
                 <P>{text}</P>
                </Content>
              </Box>
            })}
            </Section>

        </>
    )
}

export default SecondSection
