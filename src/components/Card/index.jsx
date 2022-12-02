import { StyledLi } from "./style";

export const Card = ({ type, techName, level, functionName, id }) => {
  return (
    <StyledLi id={id} onClick={functionName} className={type}>
      <h3>{techName}</h3>
      <p>{level}</p>
    </StyledLi>
  );
};
