import React from 'react'
import {Container} from '../../GlobalStyle';
import {useParams} from 'react-router-dom';
import {ProjectContainer,ProjectHeader,Title,ProjectInfo,Text,ProcejtPhoto,Img,ImgWrapper} from './SingleProjectStyled'
import {data} from '../../data/ProjectsData';



const SingleProject = () => {
    const { title } = useParams();
    return (
        <>
            <Container>                         
                    {data.filter((project) => project.title === title).map((project)=>{
                        const {id, title, text, text1, photo1,photo2,photo3,photo4,photo5,photo6} = project;
                        return(
                      <ProjectContainer key={id}>
                        <ProjectHeader>                           
                          <Title>{title}</Title>
                        </ProjectHeader>
                        <ProjectInfo>
                            <Text>{text}</Text>
                            <Text>{text1}</Text>
                        </ProjectInfo>
                        <ProcejtPhoto>
                          <ImgWrapper>
                            <Img src={photo1} />
                          </ImgWrapper>
                          <ImgWrapper>
                            <Img src={photo2} />
                          </ImgWrapper>
                          <ImgWrapper>
                            <Img src={photo3} />
                          </ImgWrapper>
                          <ImgWrapper>
                            <Img src={photo4} />
                          </ImgWrapper>
                          <ImgWrapper>
                            <Img src={photo5} />
                          </ImgWrapper>
                          <ImgWrapper>
                            <Img src={photo6} />
                          </ImgWrapper>
                        </ProcejtPhoto>
                      </ProjectContainer>
                      )
                    })}         
            </Container>
        </>
    )
}

export default SingleProject
