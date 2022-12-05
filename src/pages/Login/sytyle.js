import styled from "styled-components";

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.125rem;
  background-color: var(--color-grey3);
  border-radius: 4px;
  width: 90%;
  max-width: 370px;
  margin: 0 auto;
  padding: 34px 16px;

  button + p {
    margin-top: 16px;
  }

  a {
    background-color: var(--color-grey1);
    border: 1px solid var(--color-grey1);
    text-align: center;
    border-radius: 4px;
    padding: 12px 0;
  }

  a:hover {
    background-color: var(--color-grey2);
    border: 1px solid var(--color-grey2);
    transition: 0.3s;
  }
`;
