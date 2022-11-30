import {
  StyledButtonDisabled,
  StyledButtonGrey,
  StyledButtonPrimary,
} from "./style";

export const Button = ({ text, color, type = "submit" }) => {
  return (
    <>
      {color === "primary" && (
        <StyledButtonPrimary type={type}>{text}</StyledButtonPrimary>
      )}
      {color === "primaryDisabled" && (
        <StyledButtonDisabled type={type}>{text}</StyledButtonDisabled>
      )}
      {color === "grey" && (
        <StyledButtonGrey type={type}>{text}</StyledButtonGrey>
      )}
    </>
  );
};

// color === "primary" ? (
//   <StyledButtonPrimary>{text}</StyledButtonPrimary>
// ) : (
//   <StyledButtonGrey>{text}</StyledButtonGrey>
// );
