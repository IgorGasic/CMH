import styled from "styled-components";
import { Container } from "../../GlobalStyle";

export const FooterF = styled.footer`
  background: #000;
  height: 40px;
  justify-content: center;
  align-items: center;
  z-index: 999;
  margin-top: 0;
  padding-top: 0px;

  @media screen and (max-width: 468px) {
    font-size: 0.8rem;
  }
`;
export const FooterContainer = styled(Container)`
  height: 40px;
`;

export const Text = styled.p`
  padding-top: 5px;
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
`;
