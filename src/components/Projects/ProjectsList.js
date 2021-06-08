import React from "react";
import { Container } from "../../GlobalStyle";
import { data } from "../../data/ProjectsData";
import Project from "./Project";
import {
  H2,
  ProjectsContainer,
  UnderLine,
  TextProject,
  Con,
} from "./ProjectsStyled";

const ProjectsList = () => {
  return (
    <>
      <Con>
        <H2>Projekti</H2>
        <UnderLine />
        <TextProject>Projekti su trenutno u fazi realizacije!</TextProject>
        {/* <ProjectsContainer>
          {data.map((item) => {
            return <Project key={item.id} {...item} />;
          })}
        </ProjectsContainer> */}
      </Con>
    </>
  );
};

export default ProjectsList;
