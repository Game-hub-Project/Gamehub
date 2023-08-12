import { styled } from "styled-components";
import { ReactComponent as LeftArrowIcon } from "@/assets/LeftArrowIcon.svg";
import { ReactComponent as UserIcon } from "@/assets/UserIcon.svg";
const Header = () => {
  return (
    <HeaderStyle>
      <LeftArrowIcon />
      <Logo src="img/logo.png" />
      <UserIcon />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: black;
  text-align: center;
  padding: 10px 30px;
  z-index: 10;
`;

const Logo = styled.img`
  width: 200px;
  border-radius: 10px;
`;

// 로그인 시 유저 아이콘 var(--color-main) 으로 상태변경 필요
