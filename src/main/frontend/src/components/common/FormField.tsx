import { styled } from "styled-components";
import Input from "./input";
import { FormFiledProps } from "@/types";

const FormFiled = ({ label, name, type, placeholder }: FormFiledProps) => {
  return (
    <Wrap>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} id={name} placeholder={placeholder} />
    </Wrap>
  );
};

export default FormFiled;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`;

const Label = styled.label`
  margin: 5px 20px;
`;
