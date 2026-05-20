import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";

export const ContactPage = styled(flexCenter)`
  flex-direction: column;
  height: 120vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;
  background-color: #fcd5ce;
  background-image: url("/PageImg/Contact.svg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 28vh;
  z-index: 20;
  @media (max-width: 992px) {
    height: 120vh;
    padding: 8vh 0;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 32rem;
  margin: 2rem auto 5rem;
  @media (max-width: 612px) {
    width: 70%;
    margin-top: 3rem;
  }
`;
export const ContactOuterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  transition: 0.75s all ease;
  @media (max-width: 480px) {
    margin-bottom: 0.2rem;
    gap: 0;
  }
`;
export const ContactInnerDiv = styled.label`
  width: 100%;
  padding: 0 0.75rem;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const ContactInnerDivHalf = styled.label`
  width: 43%;
  padding: 0 0.75rem;
  margin-bottom: 0px;
  @media (max-width: 480px) {
    width: 80%;
  }
`;
export const ContactLabel = styled.label`
  display: block;
  text-transform: uppercase;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 0.025rem;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
`;
export const ContactInput = styled.input`
  display: block;
  width: 100%;
  background-color: #c1efff;
  border: 0px;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  appearance: none;
  line-height: 1.25rem;
  &:active {
    border: 0px;
  }
`;

export const ContactTextArea = styled.textarea`
  resize: none;
  appearance: none;
  display: block;
  width: 100%;
  background-color: #c1efff;
  border: 0px;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  line-height: 5rem;
  &:active {
    border: 0px;
  }
`;

export const ContactButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6; /* Vibrant blue */
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  border: 0px;
  margin-left: 3%;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4), 0 2px 4px -1px rgba(59, 130, 246, 0.3);
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px -1px rgba(59, 130, 246, 0.5), 0 4px 6px -1px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
export const ContactButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.75s all ease;
`;
