import React from "react";
import { Container } from "../../GlobalStyle";
import { useParams } from "react-router-dom";
import {
  ProjectContainer,
  ProjectHeader,
  Title,
  ProjectInfo,
  Text,
  ProcejtPhoto,
  Img,
  ImgWrapper,
} from "./SingleNewsStyled";
import { data } from "../../data/NewsData";

const SingleNews = () => {
  const { title } = useParams();
  return (
    <>
      <Container>
        {data
          .filter((project) => project.title === title)
          .map((project) => {
            const {
              id,
              title,
              text1,
              text2,
              text3,
              text4,
              imgone,
              imgtwo,
              imgthree,
              imgfour,
            } = project;
            return (
              <ProjectContainer key={id}>
                <ProjectHeader>
                  <Title>{title}</Title>
                </ProjectHeader>
                <ProjectInfo>
                  <Text>{text1}</Text>
                  <Text>{text2}</Text>
                  <Text>{text3}</Text>
                  <Text>{text4}</Text>
                </ProjectInfo>
                <ProcejtPhoto>
                  <ImgWrapper>
                    <Img src={imgone} />
                  </ImgWrapper>
                  <ImgWrapper>
                    <Img src={imgtwo} />
                  </ImgWrapper>
                  <ImgWrapper>
                    <Img src={imgthree} />
                  </ImgWrapper>
                  <ImgWrapper>
                    <Img src={imgfour} />
                  </ImgWrapper>
                </ProcejtPhoto>
              </ProjectContainer>
            );
          })}
      </Container>
    </>
  );
};

export default SingleNews;
