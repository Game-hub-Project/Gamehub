import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingIcon = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-main);
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${spin} 1s ease-in-out infinite;
`;

export default LoadingIcon;
