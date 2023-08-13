import { styled } from "styled-components";

export const ProfileEditor = styled.div`
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

export const ProfileImageSection = styled.div`
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

export const ProfileImageButton = styled.button<{ $isChange: boolean }>`
  font-size: 14px;
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${({ $isChange }) =>
    $isChange ? "var(--color-main)" : "var(--color-gray)"};
`;

export const ImgFile = styled.input`
  display: none;
`;

export const SpaceLine = styled.hr`
  border: 1px solid #e7e7e7;
  position: absolute;
  width: 416px;
  right: 0;
  top: 185px;
`;
