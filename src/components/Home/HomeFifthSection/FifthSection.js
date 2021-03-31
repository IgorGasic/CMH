import React from 'react';
import {data} from '../../../data/FifthSectionData';
import {
  Section, 
  Container, 
  Card, 
  FaceOne, 
  Content, 
  Img, 
  FaceTwo, 
  P,
  H3} from './FifthSectionStyled';

const FifthSection = () => {
    return (
        <>
        <Section>
          <Container>
            {data.map((item)=>{
                const {id, text, text2, img, title} = item;
                return(<Card key={id}>
                    <FaceOne>
                    <Content>
                      <Img src={img} />
                      <H3>{title}</H3>
                    </Content>
                    </FaceOne>            
                    <FaceTwo>
                    <Content>
                      <P primary>{text}</P>
                      <P>{text2}</P>
                    </Content>
                    </FaceTwo>            
                </Card>)
            })}
          </Container>
        </Section>   
        </>
    )
}

export default FifthSection
