import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    background-color: var(--color-grey3);
    border-radius: 4px;
    max-width: 296px;
    width: 90%;

    & > div {
      border-radius: 4px 4px 0 0;
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey2);
      color: var(--color-grey0);

      & > h3 {
        font-size: 0.75rem;
      }

      & > p {
        cursor: pointer;
        font-size: 20px;
      }
    }

    & > form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 16px 0;
      padding: 0 16px;
    }
    & > form > :nth-child(3) {
      display: flex;
      gap: 10px;
      & button {
        font-size: 0.75rem;
      }
    }
  }
`;
