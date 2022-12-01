import styled from "styled-components";

export const StyledRegister = styled.section`
  margin: 0 auto;
  padding: 34px 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  form {
    border-radius: 4px;
    width: 90%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.125rem;
    background-color: var(--color-grey3);
    margin: 0 auto;
    padding: 34px 16px;
  }
  h2 + p {
    color: var(--color-grey1);
  }
`;
