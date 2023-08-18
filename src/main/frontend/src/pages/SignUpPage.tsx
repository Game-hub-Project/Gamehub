import { useCallback, useState } from "react";
import { userInfo, userKey } from "@/types";
import { SignupValidate } from "@/utils/validate";
import PageTitle from "@/components/common/PageTitle";
import FormFiled from "@/components/common/FormField";
import FormButton from "@/components/common/FormButton";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";

const SignUpPage = () => {
  const [signUPInfo, setSignUPInfo] = useState<userInfo>({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [validateError, serValidateError] = useState("");

    const postUser = async () => {
        console.log("회원가입");
        fetch("http://localhost:8080/api/join", {
            method: "POST",
            body: JSON.stringify({
                name: "이준석",
                nickname: "준석",
                email: "email@email.com",
                password: "wnstjr6293!",
                phone_number: "010-1234-1234",
                profile: "test.png",
            }),
        });
    };

  const { name, nickname, email, password, confirmPassword, phone } =
    signUPInfo;

  const setSignUPInfoFunc = useCallback((value: string, key?: userKey) => {
    if (!key) return;
    setSignUPInfo((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <>
      <PageTitle>회원가입</PageTitle>
      <FormFiled
        name="name"
        type="text"
        placeholder="2글자 이상"
        value={name}
        onChange={setSignUPInfoFunc}
      />
      <FormFiled
        name="nickname"
        type="text"
        placeholder="2글자 이상"
        value={nickname}
        onChange={setSignUPInfoFunc}
      />
      <FormFiled
        name="email"
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={setSignUPInfoFunc}
      />
      <FormFiled
        name="password"
        type="password"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
        value={password}
        onChange={setSignUPInfoFunc}
      />
      <FormFiled
        name="confirmPassword"
        type="text"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
        value={confirmPassword}
        onChange={setSignUPInfoFunc}
      />
      <FormFiled
        name="phone"
        type="text"
        placeholder="01011112222"
        value={phone}
        onChange={setSignUPInfoFunc}
      />
      <ValidErrorMessage>{validateError}</ValidErrorMessage>
      <FormButton
        type="button"
        onClick={() => {
          //SignupValidate(signUPInfo, serValidateError);
          postUser();
        }}
      >
        가입하기
      </FormButton>
    </>
  );
};

export default SignUpPage;
