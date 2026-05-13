import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";

export const MainInfo = styled(flexCenter)`
  background-color: #9ed2c6;
  background-image: url("/PageImg/AboutPage.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 28vh;
  width: 100vw;
  color: black;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  padding: 7rem 0 6rem;
  justify-content: flex-start;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 992px) {
    padding: 5rem 0 4rem;
  }
`;

export const Name = styled.div`
  font-family: "Rum Raisin", sans-serif;
  font-size: 5rem;
  text-align: center;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Shortinfo = styled.div`
  font-family: "Megrim", cursive;
  font-size: 2.25rem;
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  color: #4a5a3a;
  margin-bottom: 3rem;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
