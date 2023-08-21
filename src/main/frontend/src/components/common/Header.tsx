import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as LeftArrowIcon } from "@/assets/LeftArrowIcon.svg";
import { ReactComponent as UserIcon } from "@/assets/UserIcon.svg";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <HeaderStyle>
      <LeftArrowIcon onClick={() => navigate(-1)} />
      <Link to="/">
        <Logo src="img/logo.png" />
      </Link>
      <Link to={token ? "/user" : "/login"}>
        <UserIcon fill={token ? "var(--color-main)" : "white"} />
      </Link>
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

  svg {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 200px;
  border-radius: 10px;
`;

// 로그인 시 유저 아이콘 var(--color-main) 으로 상태변경 필요
