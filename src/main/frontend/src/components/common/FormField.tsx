import { styled } from "styled-components";
import Input from "./input";

interface Props {
  label:
    | "이름"
    | "닉네임"
    | "이메일"
    | "비밀번호"
    | "비밀번호 확인"
    | "전화번호";
  name:
    | "name"
    | "nickname"
    | "email"
    | "password"
    | "passwordConfirm"
    | "phoneNumber";
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
}

const FormFiled = ({ label, name, type, placeholder }: Props) => {
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
  margin: 5px;
`;
