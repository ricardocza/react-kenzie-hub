import styled from "styled-components";
export const StyledButtonPrimary = styled.button`
  width: 100%;
  height: 38.5px;
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  animation-name: transitionButton;
  animation-duration: 1000ms;
  &:hover {
    background-color: var(--color-primary-focus);
    transition: 300ms;
  }
`;
export const StyledButtonGrey = styled.button`
  width: 100%;
  height: 38.5px;
  background-color: var(--color-grey1);
  border: 1px solid var(--color-grey1);
  border-radius: 4px;

  &:hover {
    background-color: var(--color-grey2);
    border: 1px solid var(--color-grey2);
    transition: 300ms;
  }
`;
export const StyledButtonDisabled = styled.button`
  width: 100%;
  height: 38.5px;
  background-color: var(--color-primary-negative);
  border: 1px solid var(--color-primary-negative);
  border-radius: 4px;

  animation-name: transitionButton;
  animation-duration: 1000ms;

  &:hover {
  }

  @keyframes transitionButton {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
