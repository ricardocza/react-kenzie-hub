import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const fadeIn = keyframes`${fadeInDown}`;
export const StyledError = styled.p`
  animation: 0.5s ${fadeIn};
  display: flex;
  width: 100%;
  margin-top: -15px;
  color: var(--color-primary);
`;
