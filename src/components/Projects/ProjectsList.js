import React from 'react'
import {Container} from '../../GlobalStyle';
import {data} from '../../data/ProjectsData'
import Project from './Project';
import {
    H2, 
    ProjectsContainer, 
    UnderLine} from './ProjectsStyled';



const ProjectsList = () => {

    return (
        <>
          <Container>
              <H2>Projekti</H2>
              <UnderLine />
              <ProjectsContainer>
                {data.map((item)=>{
                    return <Project key={item.id} {...item} />
                })}
              </ProjectsContainer>
          </Container>  
        </>
    )
}

export default ProjectsList
