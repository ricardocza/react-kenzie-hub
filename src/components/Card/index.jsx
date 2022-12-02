import { StyledLi } from "./style";

export const Card = ({ type, techName, level, functionName }) => {
  return (
    <StyledLi onClick={functionName} className={type}>
      <h3>{techName}</h3>
      <p>{level}</p>
    </StyledLi>
  );
};
