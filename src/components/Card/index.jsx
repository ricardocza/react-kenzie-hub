import { StyledLi } from "./style";

export const Card = ({ type, techName, level }) => {
  return (
    <StyledLi className={type}>
      <h3>{techName}</h3>
      <p>{level}</p>
    </StyledLi>
  );
};
