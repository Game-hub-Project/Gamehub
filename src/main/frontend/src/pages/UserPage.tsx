import { useCallback, useState } from "react";
import { userKey, editUserInfo } from "@/types";
import { EditUserInfoValidate } from "@/utils/validate";
import FormFiled from "@/components/common/FormField";
import FormButton from "@/components/common/FormButton";
import { LogoutButton, SpaceLine } from "@/components/user/user.style";
import EditProfileImage from "@/components/user/EditProfileImage";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [editUserInfo, setEditUserInfo] = useState<editUserInfo>({
    nickname: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
  });

  const [validateError, serValidateError] = useState("");

  const { nickname, password, confirmPassword, phone_number } = editUserInfo;

  const setEditUserInfoFunc = useCallback((value: string, key?: userKey) => {
    if (!key) return;
    setEditUserInfo((prev) => ({ ...prev, [key]: value }));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <EditProfileImage />
      <SpaceLine />
      <FormFiled
        name="nickname"
        type="text"
        placeholder="2글자 이상"
        value={nickname}
        onChange={setEditUserInfoFunc}
      />
      <FormFiled
        name="password"
        type="password"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
        value={password}
        onChange={setEditUserInfoFunc}
      />
      <FormFiled
        name="confirmPassword"
        type="password"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
        value={confirmPassword}
        onChange={setEditUserInfoFunc}
      />
      <FormFiled
        name="phone_number"
        type="tel"
        placeholder="01011112222"
        value={phone_number}
        onChange={setEditUserInfoFunc}
      />
      <ValidErrorMessage>{validateError}</ValidErrorMessage>
      <FormButton
        onClick={() => {
          EditUserInfoValidate(editUserInfo, serValidateError);
        }}
      >
        수정하기
      </FormButton>

      <LogoutButton
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        로그아웃
      </LogoutButton>
    </>
  );
};

export default UserPage;
