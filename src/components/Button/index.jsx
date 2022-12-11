import { Link } from "react-router-dom";
import {
  StyledButtonDisabled,
  StyledButtonGrey,
  StyledButtonPrimary,
} from "./style";

export const Button = ({ text, color, type = "submit", onClick }) => {
  return (
    <>
      {color === "primary" && (
        <StyledButtonPrimary onClick={onClick} type={type}>
          {text}
        </StyledButtonPrimary>
      )}
      {color === "primaryDisabled" && (
        <StyledButtonDisabled onClick={onClick} type={type}>
          {text}
        </StyledButtonDisabled>
      )}
      {color === "grey" && (
        <StyledButtonGrey onClick={onClick} type={type}>
          {text}
        </StyledButtonGrey>
      )}
    </>
  );
};
