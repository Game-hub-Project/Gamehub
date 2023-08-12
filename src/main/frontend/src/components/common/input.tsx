import { styled } from "styled-components";

const Input = styled.input`
  width: 320px;
  height: 30px;
  margin-top: 5px;
  padding: 5px 12px;
  border-radius: 8px;
  border: 1px solid var(--color-main);

  &:focus {
    outline: 3px solid var(--color-sub);
  }
`;

export default Input;
