import { styled } from "styled-components";

const EditProfileImage = () => {
  return (
    <ProfileEditor>
      <h3>회원정보 수정</h3>
      <p>프로필과 정보를 변경할 수 있습니다.</p>
      <ProfileImageSection>
        <img src="img/logo.png" alt="프로필 이미지" />
        <div>
          <ProfileImageButton $isChange={true}>사진 변경</ProfileImageButton>
          <ProfileImageButton $isChange={false}>사진 제거</ProfileImageButton>
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
