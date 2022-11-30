import { Link } from "react-router-dom";
import {
  StyledButtonDisabled,
  StyledButtonGrey,
  StyledButtonPrimary,
} from "./style";

export const Button = ({ text, color, type = "submit", link = "" }) => {
  return (
    <>
      {color === "primary" && (
        <Link to={link}>
          <StyledButtonPrimary type={type}>{text}</StyledButtonPrimary>
        </Link>
      )}
      {color === "primaryDisabled" && (
        <Link to={link}>
          <StyledButtonDisabled type={type}>{text}</StyledButtonDisabled>
        </Link>
      )}
      {color === "grey" && (
        <Link to={link}>
          {" "}
          <StyledButtonGrey type={type}>{text}</StyledButtonGrey>
        </Link>
      )}
    </>
  );
};
