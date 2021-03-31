import React, { useState } from 'react'
import {data} from '../../data/ProjectsData';
import {Container} from '../../GlobalStyle';
import {ProjectContainer,ProjectHeader,Title,ProjectInfo,Text,ProcejtPhoto,Img} from './SingleProjectStyled'


const SingleProject = () => {
    const [projekat,setProjekat] = useState(data[0]);

    return (
        <>
            <Container>
            <ProjectContainer>
                <ProjectHeader>
                  <Title>{projekat.title}</Title>
                </ProjectHeader>
                <ProjectInfo>
                  <Text>{projekat.text}</Text>
                </ProjectInfo>
                <ProcejtPhoto>
                    <Img src={projekat.photo1} />
                    <Img src={projekat.photo1} />
                    <Img src={projekat.photo1} />
                    <Img src={projekat.photo1} />
                    <Img src={projekat.photo1} />
                    <Img src={projekat.photo1} />
                </ProcejtPhoto>
            </ProjectContainer>
            </Container>
        </>
    )
}

export default SingleProject
