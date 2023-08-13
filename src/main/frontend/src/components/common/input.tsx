import { styled } from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 5px auto;
  padding: 5px 12px;
  border-radius: 8px;
  border: 1px solid var(--color-main);

  &:focus {
    outline: 3px solid var(--color-sub);
  }
`;

export default Input;
