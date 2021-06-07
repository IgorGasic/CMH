import React from "react";
import {
  NewsContaineR,
  NewsImg,
  Img,
  NewsContent,
  H3,
  Links,
  NewsLink,
  P,
} from "./NewsStyled";

const News = ({ id, title, text1, thumb }) => {
  return (
    <>
      <NewsContaineR>
        <NewsImg>
          <Img src={thumb} alt={title} />
        </NewsImg>
        <NewsContent>
          <H3>{title}</H3>
          <P>{text1.substr(0, 200)}...</P>
          <Links>
            <NewsLink to={`/vest/${title}`}>Detaljnije</NewsLink>
          </Links>
        </NewsContent>
      </NewsContaineR>
    </>
  );
};

export default News;
