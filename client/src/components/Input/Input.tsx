import React from "react";
import styled from "styled-components";

type TProps = {
  placeholder: string | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ placeholder, value, onChange }: TProps) => {
  return (
    <CustomInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

const CustomInput = styled.input`
  border: none;
  font-size: 1.25rem;
  padding: 12px;
  border-radius: 5px;
`;

export default Input;
