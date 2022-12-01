import styled from "styled-components";

export const StyledHome = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 34px 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header + section {
    border-top: 2px solid var(--color-grey3);
    border-bottom: 2px solid var(--color-grey3);
    padding: 2.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > :nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 21px;
  }
  & > :nth-child(3) div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > :nth-child(3) div button {
    width: 32px;
    height: 32px;
    background-color: var(--color-grey3);
    border: 1px solid var(--color-grey3);
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;

export const StyledUl = styled.ul`
  background-color: var(--color-grey2);
  border-radius: 4px;
  padding: 22px 8.5px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    background-color: var(--color-grey4);
    padding: 12px;
    cursor: pointer;
  }

  li:hover {
    background-color: var(--color-grey1);
    transition: 0.3s;
  }

  li p {
    color: var(--color-grey2);
  }
`;
