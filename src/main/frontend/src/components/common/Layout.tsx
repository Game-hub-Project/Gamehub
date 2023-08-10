import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainBackGround from "/img/MainBackGround2.jpg";

const BackGround = styled.div`
  width: 100%;
  background-image: url(${MainBackGround});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const LayoutStyle = styled.div`
  width: 420px;
  height: 1000px;
  background-color: white;
  margin-left: 60%;
`;

const Layout = () => {
  return (
    <BackGround>
      <LayoutStyle>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </LayoutStyle>
    </BackGround>
  );
};

export default Layout;
