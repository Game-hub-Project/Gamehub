import FormButton from "@/components/common/FormButton";
import FormFiled from "@/components/common/FormField";
import PageTitle from "@/components/common/PageTitle";

const SignUpPage = () => {
  return (
    <>
      <PageTitle>회원가입</PageTitle>
      <FormFiled label="이름" name="name" type="text" />
      <FormFiled label="닉네임" name="nickname" type="text" />
      <FormFiled label="이메일" name="email" type="email" />
      <FormFiled label="비밀번호" name="password" type="password" />
      <FormFiled label="비밀번호 확인" name="passwordConfirm" type="text" />
      <FormFiled label="전화번호" name="phoneNumber" type="tel" />

      <FormButton type="button">가입하기</FormButton>
    </>
  );
};

export default SignUpPage;
