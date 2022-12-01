import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  h1 {
    margin: 0;
  }

  button {
    max-width: 100px;
    background-color: var(--color-grey3);
    border: 1px solid var(--color-grey3);
  }

  a {
    max-width: 100px;
  }
`;
