import styled from "styled-components";

export const StyledRegister = styled.section`
  margin: 0 auto;
  padding: 34px 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  header h1 {
    margin: 0;
  }

  header button {
    max-width: 100px;
    background-color: var(--color-grey3);
    border: 1px solid var(--color-grey3);
  }

  header a {
    max-width: 100px;
  }

  form {
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
