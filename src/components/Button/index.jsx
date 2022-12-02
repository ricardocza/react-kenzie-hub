import { Link } from "react-router-dom";
import {
  StyledButtonDisabled,
  StyledButtonGrey,
  StyledButtonPrimary,
} from "./style";

export const Button = ({
  text,
  color,
  type = "submit",
  setCurrentRoute,
  newRoute,
}) => {
  return (
    <>
      {color === "primary" && (
        <StyledButtonPrimary
          onClick={() => setCurrentRoute(newRoute)}
          type={type}
        >
          {text}
        </StyledButtonPrimary>
      )}
      {color === "primaryDisabled" && (
        <StyledButtonDisabled
          onClick={() => setCurrentRoute(newRoute)}
          type={type}
        >
          {text}
        </StyledButtonDisabled>
      )}
      {color === "grey" && (
        <StyledButtonGrey onClick={() => setCurrentRoute(newRoute)} type={type}>
          {text}
        </StyledButtonGrey>
      )}
    </>
  );
};
