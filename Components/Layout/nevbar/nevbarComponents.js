import styled from "styled-components";

export const NevbarUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: 0px;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 5rem;
  margin-left: 0px;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  -webkit-tap-highlight-color: transparent;
  padding-inline-start: 0;
  &::selection {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    top: 0px;
    bottom: auto;
    left: 0px;
    right: 0px;
    height: 4.5rem;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(84, 186, 185, 0.95);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 0px 0px 20px 20px;
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;
export const Nevbarli = styled.div`
  list-style: none;
  display: flex;
  border-radius: 100px;
  transform: translateY(-5vh);
  max-width: 30px;
  align-items: center;
  flex-direction: column;
  min-height: 30px;
  max-height: 30px;
  background-color: ${(props) => (props.isActive ? "lightblue" : "#54bab9")};
  margin-top: 1.3rem;
  font-size: ${(props) => (props.isActive ? "small" : "0px")};
  padding: 10px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${(props) =>
    props.isActive &&
    `
    height: 30px;
    flex-direction: row;
    min-width: 5rem;
    gap: 10px;
    max-width: 200px;
  `}

  &:hover {
    background-color: lightblue;
    height: 30px;
    flex-direction: row;
    min-width: 5rem;
    gap: 10px;
    font-size: small;
    max-width: 200px;
  }
  &::selection {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    transform: none;
    margin-top: 0;
    flex-direction: row;
    max-width: none;
    min-height: 30px;
    max-height: none;
    font-size: 0px;
    padding: 8px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: auto;
    
    ${(props) =>
      props.isActive &&
      `
      background-color: lightblue;
      min-width: auto;
      gap: 0;
      font-size: 0px; 
    `}

    &:hover {
      min-width: auto;
      font-size: 0px;
      gap: 0;
    }
  }
`;
