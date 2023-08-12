import FormButton from "@/components/common/FormButton";
import FormFiled from "@/components/common/FormField";
import PageTitle from "@/components/common/PageTitle";

const SignUpPage = () => {
  return (
    <>
      <PageTitle>회원가입</PageTitle>
      <FormFiled
        label="이름"
        name="name"
        type="text"
        placeholder="2글자 이상"
      />
      <FormFiled
        label="닉네임"
        name="nickname"
        type="text"
        placeholder="2글자 이상"
      />
      <FormFiled
        label="이메일"
        name="email"
        type="email"
        placeholder="email@email.com"
      />
      <FormFiled
        label="비밀번호"
        name="password"
        type="password"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
      />
      <FormFiled
        label="비밀번호 확인"
        name="passwordConfirm"
        type="text"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
      />
      <FormFiled
        label="전화번호"
        name="phoneNumber"
        type="tel"
        placeholder="01011112222"
      />

      <FormButton type="button">가입하기</FormButton>
    </>
  );
};

export default SignUpPage;
