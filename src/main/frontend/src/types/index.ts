export interface FormFiledProps {
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
