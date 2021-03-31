import React from 'react'
import {
    ProjectContainer,
    ProjectImg,
    Img,
    ProjectContent,
    ProjectLink,
    LinkIcon,
    Links, 
    H3,
    H4,
    P,
    Content,
    Calendar} from './ProjectsStyled';

const Project = ({id, title, date, text, thumb}) => {
    return (
        <>
            <ProjectContainer>
                <ProjectImg>
                    <Img src={thumb} alt={title}/>
                </ProjectImg>
                <ProjectContent>
                    <H3>{title}</H3>
                    <Content>
                      <Calendar/><H4>{date}</H4>
                    </Content>
                    <P>{text.substr(0,200)}...</P>
                    <Links>
                    <LinkIcon/><ProjectLink to={`/porjekat/${id}`}>Opsirnije</ProjectLink>
                    </Links>
                </ProjectContent>
            </ProjectContainer> 
        </>
    )
}

export default Project
