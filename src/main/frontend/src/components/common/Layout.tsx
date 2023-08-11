import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainBackGround from "/img/MainBackGround2.jpg";

const Layout = () => {
  return (
    <BackGround>
      <LayoutStyle>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </LayoutStyle>
    </BackGround>
  );
};

export default Layout;

const BackGround = styled.div`
  background-image: url(${MainBackGround});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 50%;
`;

const LayoutStyle = styled.div`
  width: 420px;
  background-color: white;
  margin-left: 60%;

  @media (max-width: 768px) {
    background-color: var(--color-gray-light);
  }

  @media (max-width: 1100px) {
    margin: auto;
  }
`;

const Main = styled.main`
  padding: 10px;
`;
