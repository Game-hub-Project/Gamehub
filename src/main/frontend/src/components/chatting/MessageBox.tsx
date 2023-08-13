import { styled } from "styled-components";

const MessageBox = ({ isMe }: { isMe: boolean }) => {
  return (
    <MessageBoxStyle $isMe={isMe}>
      <Profile src="img/logo.png" alt="프로필 이미지" />
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

const MessageBoxStyle = styled.div<{ $isMe: boolean }>`
  display: flex;
  margin-top: 10px;
  margin: 10px;
  ${({ $isMe }) => $isMe && "flex-direction: row-reverse;"}
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  margin: 0 10px;
`;

const Nickname = styled.div<{ $isMe: boolean }>`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 300;

  ${({ $isMe }) => $isMe && "  text-align: right;"}
`;

const MessageWrap = styled.div<{ $isMe: boolean }>`
  display: flex;
  align-items: flex-end;
  ${({ $isMe }) => $isMe && "flex-direction: row-reverse;"}
`;

const Message = styled.p`
  padding: 5px 10px;
  max-width: 200px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  background-color: white;
  border-radius: 10px;
  white-space: pre-wrap;
`;

const MessageTime = styled.span`
  font-size: 11px;
  font-weight: 300;
  margin: 0 5px;
  margin-bottom: 5px;
`;
