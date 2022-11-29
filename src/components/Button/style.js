import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  background-color: var(--color-primary);
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
