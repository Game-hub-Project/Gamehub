import FormButton from "@/components/common/FormButton";
import FormFiled from "@/components/common/FormField";
import PageTitle from "@/components/common/PageTitle";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";
import SignUpLink from "@/components/login/SignUpLink";
import { LoginValidate } from "@/utils/validate";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateError, serValidateError] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onClick = () => {
    LoginValidate(email, password, serValidateError);
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginPage;
