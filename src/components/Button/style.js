import styled from "styled-components";
export const StyledButtonPrimary = styled.button`
  background-color: var(--color-primary);
  animation-name: transitionButton;
  animation-duration: 1000ms;
  &:hover {
    background-color: var(--color-primary-focus);
    transition: 300ms;
  }
`;
export const StyledButtonGrey = styled.button`
  background-color: var(--color-grey1);
  border: 1px solid var(--color-grey1);

  &:hover {
    background-color: var(--color-grey2);
    border: 1px solid var(--color-grey2);
    transition: 300ms;
  }
`;
export const StyledButtonDisabled = styled.button`
  background-color: var(--color-primary-negative);
  border: 1px solid var(--color-primary-negative);
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
