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
`;
