import passIcon from "../../images/passIcon.png";
import { StyledDiv, StyledFieldset } from "./style";

export const Input = ({
  name,
  type,
  label,
  placeholder,
  register,
  required,
  disabled = false,
  value,
}) => {
  const showPassword = (event) => {
    event.target.previousSibling.type = "text";
  };

  const hidePassword = (event) => {
    event.target.previousSibling.type = "password";
  };
  return (
    <StyledFieldset>
      <label htmlFor="">{label}</label>

      <StyledDiv>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, { required })}
        />
        {type === "password" ? (
          <span onMouseDown={showPassword} onMouseUp={hidePassword}>
            <img src={passIcon} alt="" />
          </span>
        ) : null}
      </StyledDiv>
    </StyledFieldset>
  );
};
