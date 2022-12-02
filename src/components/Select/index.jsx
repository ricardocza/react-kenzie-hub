import { useState } from "react";
import { Button } from "../Button";
import { StyledDiv, StyledSelect } from "./style";

export const Select = ({ name, options, textLabel, register, required }) => {
  return (
    <StyledDiv>
      <label htmlFor="">{textLabel}</label>
      <StyledSelect {...register(name, { required })}>
        <option value={""}>Selecione um período</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
    </StyledDiv>
  );
};
