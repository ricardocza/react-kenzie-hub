import passIcon from "../../images/passIcon.png";
import { StyledDiv, StyledInput } from "./style";

export const Input = ({
  name,
  type,
  label,
  placeholder,
  register,
  required,
}) => {
  const showPassword = (event) => {
    event.target.previousSibling.type = "text";
  };

  const hidePassword = (event) => {
    event.target.previousSibling.type = "password";
  };
  return (
    <StyledDiv>
      <label htmlFor="">{label}</label>

      <StyledInput>
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
      </StyledInput>
    </StyledDiv>
  );
};
