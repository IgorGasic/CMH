import React from 'react'
import {Container} from '../../GlobalStyle';
import {useGlobalContext} from '../../context';
import Project from './Project';
import {
    H2, 
    ProjectsContainer, 
    UnderLine} from './ProjectsStyled';



const ProjectsList = () => {
    const {project} = useGlobalContext();
    return (
        <>
          <Container>
              <H2>Projekti</H2>
              <UnderLine />
              <ProjectsContainer>
                {project.map((item)=>{
                    return <Project key={item.id} {...item} />
                })}
              </ProjectsContainer>
          </Container>  
        </>
    )
}

export default ProjectsList
