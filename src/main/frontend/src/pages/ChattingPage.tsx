import { styled } from "styled-components";
import Date from "@/components/chatting/Date";
import MessageBox from "@/components/chatting/MessageBox";
import PostMessage from "@/components/chatting/PostMessage";
const ChattingPage = () => {
  return (
    <BackGround>
      <Date />
      <MessageBox isMe={false} />
      <MessageBox isMe={true} />
      <PostMessage />
    </BackGround>
  );
};

export default ChattingPage;

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-blue-light);
`;
