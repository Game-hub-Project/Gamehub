import FormButton from "@/components/common/FormButton";
import FormFiled from "@/components/common/FormField";
import PageTitle from "@/components/common/PageTitle";
import SignUpLink from "@/components/login/SignUpLink";

const LoginPage = () => {
  return (
    <div>
      <PageTitle>로그인</PageTitle>
      <FormFiled label="이메일" name="email" type="email" />
      <FormFiled label="비밀번호" name="password" type="password" />
      <FormButton type="button">로그인 하기</FormButton>
      <SignUpLink />
    </div>
  );
};

export default LoginPage;
