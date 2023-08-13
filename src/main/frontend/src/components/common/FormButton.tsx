import { styled } from "styled-components";

const FormButton = styled.button`
  display: block;
  width: 300px;
  height: 40px;
  background-color: var(--color-main);
  color: white;
  border-radius: 8px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 30px;
  font-weight: 300;

  &:hover {
    background-color: var(--color-sub);
  }
`;
export default FormButton;
