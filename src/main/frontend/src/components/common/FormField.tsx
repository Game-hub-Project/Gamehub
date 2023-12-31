import React from "react";
import { styled } from "styled-components";
import { FormFiledProps, userKey } from "@/types";
import autoHyphen from "@/utils/autoHyphen";
import Input from "./Input";

const FormFiled = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}: FormFiledProps) => {
  return (
    <FormFiledStyle>
      <Label htmlFor={name}>{labelText(name)}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        maxLength={
          name === "phone_number"
            ? 13
            : name === "password"
            ? 15
            : name === "confirmPassword"
            ? 15
            : undefined
        }
        onChange={(e) => {
          if (name === "phone_number") {
            e.target.value = autoHyphen(e.target.value);
          }
          onChange(e.target.value, name);
        }}
      />
    </FormFiledStyle>
  );
};

export default React.memo(FormFiled);

const FormFiledStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`;

const Label = styled.label`
  margin: 5px 20px;
`;

const labelText = (name: userKey) => {
  switch (name) {
    case "name":
      return "이름";
    case "nickname":
      return "닉네임";
    case "email":
      return "이메일";
    case "password":
      return "비밀번호";
    case "confirmPassword":
      return "비밀번호 확인";
    case "phone_number":
      return "전화번호";
    default:
      "";
  }
};
