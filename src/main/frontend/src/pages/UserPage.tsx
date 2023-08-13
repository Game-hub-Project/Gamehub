import FormFiled from "@/components/common/FormField";
import { SpaceLine } from "@/components/user/Line";
import EditProfileImage from "@/components/user/EditProfileImage";
import FormButton from "@/components/common/FormButton";
import { useCallback, useState } from "react";
import { userKey, editUserInfo } from "@/types";
import { EditUserInfoValidate } from "@/utils/validate";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";

const UserPage = () => {
  const [editUserInfo, setEditUserInfo] = useState<editUserInfo>({
    nickname: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [validateError, serValidateError] = useState("");

  const { nickname, password, confirmPassword, phone } = editUserInfo;

  const setEditUserInfoFunc = useCallback((value: string, key?: userKey) => {
    if (!key) return;
    setEditUserInfo((prev) => ({ ...prev, [key]: value }));
  }, []);

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
        type="text"
        placeholder="특수문자, 문자, 숫자 포함 8~15자"
        value={confirmPassword}
        onChange={setEditUserInfoFunc}
      />
      <FormFiled
        name="phone"
        type="tel"
        placeholder="01011112222"
        value={phone}
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
    </>
  );
};

export default UserPage;
