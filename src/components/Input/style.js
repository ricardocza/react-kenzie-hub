import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  position: relative;
  border: none;
`;

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;

  input {
    height: 38.5px;
    width: 100%;
    background-color: var(--color-grey2);
    color: var(--color-grey1);
    border-radius: 4px;
    border: 1px solid var(--color-grey2);
    font-size: 0.875rem;
    padding-left: 1rem;
  }
  input:focus {
    border: 1px solid var(--color-grey0);
    color: var(--color-grey0);
  }

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    background-color: transparent;
    display: flex;
    border: none;
    cursor: pointer;
  }

  span img {
    pointer-events: none;
  }
`;
