import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpLink = () => {
  return (
    <Container>
      <SignUpMessage>아직 회원이 아니신가요?</SignUpMessage>
      <SignUpButton to={"/signup"}>회원가입</SignUpButton>
    </Container>
  );
};

export default SignUpLink;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const SignUpMessage = styled.p``;

const SignUpButton = styled(Link)`
  color: var(--color-main);
  margin: 0 10px;
  text-decoration: underline;
`;
