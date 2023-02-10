import React from "react";
import styled from "styled-components";

type TProps = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ title, onClick }: TProps): JSX.Element => {
  return <CustomButton onClick={onClick}>{title}</CustomButton>;
};

const CustomButton = styled.button`
  padding: 0.2em;
  cursor: pointer;
  background-color: lightgoldenrodyellow;
  border: 1px solid lightgray;
  text-align: center;
`;

export default Button;
