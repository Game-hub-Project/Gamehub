import FormFiled from "@/components/common/FormField";
import { SpaceLine } from "@/components/user/Line";
import EditProfileImage from "@/components/user/EditProfileImage";
import FormButton from "@/components/common/FormButton";

const UserPage = () => {
  return (
    <>
      <EditProfileImage />
      <SpaceLine />
      <FormFiled
        label="닉네임"
        name="nickname"
        type="text"
        placeholder="2글자 이상"
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

      <FormButton>수정하기</FormButton>
    </>
  );
};

export default UserPage;
