import styled from "styled-components";

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.125rem;
  background-color: var(--color-grey3);
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  padding: 34px 16px;

  button + p {
    margin-top: 16px;
  }
`;
