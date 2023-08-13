import { styled } from "styled-components";

const PostMessage = () => {
  return (
    <PostMessageStyle>
      <InputStyle placeholder="내용을 입력해 주세요." />
      <PostButton> 전송</PostButton>
    </PostMessageStyle>
  );
};

export default PostMessage;

const PostMessageStyle = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const InputStyle = styled.textarea`
  box-sizing: border-box;
  width: 90%;
  height: 120px;
  padding: 10px;
  border: none;
  resize: none;
  font-size: 14px;
  line-height: 14px;
  &:focus {
    outline: none;
  }
`;

const PostButton = styled.button`
  width: 10%;
  height: 120px;
  color: white;
  background-color: var(--color-main);
`;
