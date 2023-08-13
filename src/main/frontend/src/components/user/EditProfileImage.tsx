import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

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
            <File type="file" onChange={fileHandler} id="file" />
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

const ProfileEditor = styled.div`
  margin: 20px 20px 40px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 7px;
    color: var(--color-gray-2);
    font-weight: 200;
  }
`;

const ProfileImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 10px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 15px;
  }
`;

const ProfileImageButton = styled.button<{ $isChange: boolean }>`
  font-size: 14px;
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${({ $isChange }) =>
    $isChange ? "var(--color-main)" : "var(--color-gray)"};
`;

const File = styled.input`
  display: none;
`;
