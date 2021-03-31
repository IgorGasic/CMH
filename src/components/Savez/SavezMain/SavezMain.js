import React from 'react';
import {data} from '../../../data/SavezData';
import {
    SavezContainer, 
    Box, 
    ImgBox, 
    Img, 
    Content, 
    H3, 
    Par, 
    FaceIcon, 
    InstaIcon, 
    WebSite, 
    Icons, 
    Social} from './SavezMainStyled';

const Savez = () => {
    return (
        <>
            <SavezContainer>
            {data.map((item)=>{
            const {id,name,discribe,img, colors, paddings, fb, insta, www}=item;
            return(<Box key={id}>
            <ImgBox>
            <Img src={img} alt={name}/>
            </ImgBox>
            <Content>
                <H3 style={{color:`${colors}`, paddingTop:`${paddings}`}}>{name}</H3>
                <Par>{discribe}</Par>
            </Content>
            <Icons>
              <Social href={fb}><FaceIcon /></Social>
              <Social href={insta}><InstaIcon /></Social>
              <Social href={www}><WebSite /></Social>
            </Icons>
          </Box>
            )
          })}
            </SavezContainer>
        </>
    )
}

export default Savez
