import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>서로를 위해 불쾌하거나 민감한 표현은 삼가 주세요.</p>
      <p>front-E-mail : wnstjr6293@gmail.com</p>
      <p>back-E-mail : shinms9812@gmail.com</p>
      <p>© Gamehub Korea Corporation All Rights Reserved.</p>
      <Logo src="img/logo.png" />
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  padding: 10px;
  color: var(--color-gray-light-2);
  font-size: 12px;
  font-weight: 100;
  background-color: var(--color-black-light);
  position: relative;
  p {
    margin: 3px 0;
  }
`;

const Logo = styled.img`
  width: 100px;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 15px;
`;
