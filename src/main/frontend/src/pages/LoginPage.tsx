import { useState } from "react";
import { LoginValidate } from "@/utils/validate";
import FormButton from "@/components/common/FormButton";
import FormFiled from "@/components/common/FormField";
import PageTitle from "@/components/common/PageTitle";
import SignUpLink from "@/components/login/SignUpLink";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";
import { login } from "@/api/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateError, serValidateError] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onClick = () => {
    if (LoginValidate(email, password, serValidateError)) {
      login({ email, password }, navigate);
    }
  };

  return (
    <>
      <PageTitle>로그인</PageTitle>
      <FormFiled
        name="email"
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={onChangeEmail}
      />
      <FormFiled
        name="password"
        type="password"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
        value={password}
        onChange={onChangePassword}
      />
      <ValidErrorMessage>{validateError}</ValidErrorMessage>

      <FormButton type="button" onClick={onClick}>
        로그인 하기
      </FormButton>
      <SignUpLink />
    </>
  );
};

export default LoginPage;
