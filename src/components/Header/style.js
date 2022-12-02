import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;

  h1 {
    margin: 0;
  }

  button {
    width: 100%;
    max-width: 100px;
    height: 38.5px;
    background-color: var(--color-grey3);
    border: 1px solid var(--color-grey3);
    border-radius: 4px;
    color: var(--color-grey0);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-grey2);
    border: 1px solid var(--color-grey2);
    transition: 0.3s;
  }

  a {
    max-width: 100px;
  }
`;
