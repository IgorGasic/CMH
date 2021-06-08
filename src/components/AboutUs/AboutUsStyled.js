import styled from "styled-components";
import { Underline } from "../../GlobalStyle";

export const AboutUsRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 91vh;

  @media screen and (max-width: 415px) {
    height: 100vh;
    padding-top: 500px;
    margin-bottom: 50px;
    padding-bottom: 500px;
  }

  @media screen and (max-width: 400px) {
    height: 100%;
    padding-top: 0;
    padding-bottom: 100px;
  }
`;
export const AboutUsColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;

  @media screen and (max-width: 415px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 400px) {
    padding-top: 50px;
  }
`;
export const Title = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin-top: 1.5rem;

  @media screen and (max-width: 468px) {
    font-size: 2.4rem;
    margin-bottom: 2px;
    margin-top: 1rem;
  }
`;
export const Text = styled.p`
  max-width: ${(props) => (props.large ? "1200px" : "540px")};
  padding-bottom: 00px;
  font-size: 1.2rem;
  margin-top: 150px;
  text-align: center;

  @media screen and (max-width: 415px) {
    margin-top: 50px;
  }
`;
export const AboutUsImg = styled.div`
  padding-top: 190px;
  max-width: 655px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 468px) {
    padding-top: 0;
  }
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  min-height: 350px;
`;
export const UnderLine = styled(Underline)`
  width: 15rem;
  margin-top: -15px;
`;
