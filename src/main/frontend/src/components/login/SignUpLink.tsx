import { Container, SignUpButton, SignUpMessage } from "./login.style";

const SignUpLink = () => {
  return (
    <Container>
      <SignUpMessage>아직 회원이 아니신가요?</SignUpMessage>
      <SignUpButton to={"/signup"}>회원가입</SignUpButton>
    </Container>
  );
};

export default SignUpLink;
