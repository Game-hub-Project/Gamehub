import {
  MessageBoxStyle,
  Profile,
  Nickname,
  MessageWrap,
  Message,
  MessageTime,
} from "./chatting.style";

const MessageBox = ({ isMe }: { isMe: boolean }) => {
  return (
    <MessageBoxStyle $isMe={isMe}>
      <Profile src="img/logo-2.png" alt="프로필 이미지" />
      <div>
        <Nickname $isMe={isMe}>이준석</Nickname>
        <MessageWrap $isMe={isMe}>
          <Message>{`안녕 ㅇㄴㄴ 안녕        dkssud          
            aa         `}</Message>
          <MessageTime>오후 8:37</MessageTime>
        </MessageWrap>
      </div>
    </MessageBoxStyle>
  );
};

export default MessageBox;
