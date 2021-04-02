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
            <ProjectContainer key={id}>
                <ProjectImg>
                    <Img src={thumb} />
                </ProjectImg>
                <ProjectContent>
                    <H3>{title}</H3>
                    <Content>
                      <Calendar/><H4>{date}</H4>
                    </Content>
                    <P>{text.substr(0,200)}...</P>
                    <Links>
                    <LinkIcon/><ProjectLink to={`/porjekat/${title}`}>Opsirnije</ProjectLink>
                    </Links>
                </ProjectContent>
            </ProjectContainer> 
        </>
    )
}

export default Project
