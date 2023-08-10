import { styled } from "styled-components";
import { ReactComponent as LeftArrowIcon } from "@/assets/LeftArrowIcon.svg";
const Header = () => {
  return (
    <HeaderStyle>
      <LeftArrowIcon />
      <Logo src="img/logo.png" />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  background-color: black;
  text-align: center;
  padding: 10px 20px;
`;

const Logo = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-left: 60px;
`;
