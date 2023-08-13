import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const SignUpMessage = styled.p``;

export const SignUpButton = styled(Link)`
  color: var(--color-main);
  margin: 0 10px;
  text-decoration: underline;
`;
