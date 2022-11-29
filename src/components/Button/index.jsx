import { StyledButtonGrey, StyledButtonPrimary } from "./style";

export const Button = ({ text, color }) => {
  return color === "primary" ? (
    <StyledButtonPrimary>{text}</StyledButtonPrimary>
  ) : (
    <StyledButtonGrey>{text}</StyledButtonGrey>
  );
};
