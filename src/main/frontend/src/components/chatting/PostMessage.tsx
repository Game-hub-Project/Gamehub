import { PostMessageStyle, InputStyle, PostButton } from "./chatting.style";

const PostMessage = () => {
  return (
    <PostMessageStyle>
      <InputStyle placeholder="내용을 입력해 주세요." />
      <PostButton> 전송</PostButton>
    </PostMessageStyle>
  );
};

export default PostMessage;
