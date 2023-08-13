import { ChangeEvent, useState } from "react";
import {
  ProfileEditor,
  ProfileImageSection,
  ProfileImageButton,
  ImgFile,
} from "./user.style";

const EditProfileImage = () => {
  const [userProfile, setUserProfile] = useState<string | null>(null);

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserProfile(reader.result as string);
      };
      reader.onerror = () => {
        throw new Error("file reading error");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileEditor>
      <h3>회원정보 수정</h3>
      <p>프로필과 정보를 변경할 수 있습니다.</p>
      <ProfileImageSection>
        <img src={userProfile || "img/logo-2.png"} alt="프로필 이미지" />
        <div>
          <ProfileImageButton $isChange={true}>
            <label htmlFor="file">사진 변경</label>
            <ImgFile type="file" onChange={fileHandler} id="file" />
          </ProfileImageButton>
          <ProfileImageButton
            $isChange={false}
            onClick={() => {
              setUserProfile("");
            }}
          >
            사진 제거
          </ProfileImageButton>
        </div>
      </ProfileImageSection>
    </ProfileEditor>
  );
};
export default EditProfileImage;
