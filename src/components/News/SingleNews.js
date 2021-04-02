import React from 'react';
import {Container} from '../../GlobalStyle';
import {useParams} from 'react-router-dom';
import {ProjectContainer,ProjectHeader,Title,ProjectInfo,Text,ProcejtPhoto,Img} from './SingleNewsStyled';
import {data} from '../../data/NewsData';

const SingleNews = () => {
    const { title } = useParams();
    return (
        <>
            <Container>                         
                    {data.filter((project) => project.title === title).map((project)=>{
                        const {id, title, text, imgone} = project;
                        return(
                      <ProjectContainer key={id}>
                        <ProjectHeader>                           
                          <Title>{title}</Title>
                        </ProjectHeader>
                        <ProjectInfo>
                            <Text>{text}</Text>
                        </ProjectInfo>
                        <ProcejtPhoto>
                            <Img src={imgone} />
                            {/* <Img src={photo2} />
                            <Img src={photo3} />
                            <Img src={photo4} />
                            <Img src={photo5} />
                            <Img src={photo1} /> */}
                        </ProcejtPhoto>
                      </ProjectContainer>
                      )
                    })}         
            </Container>
        </>
    )
}

export default SingleNews
