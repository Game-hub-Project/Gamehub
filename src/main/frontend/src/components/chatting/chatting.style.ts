import { styled } from "styled-components";

//Date에서 사용
export const DateStyle = styled.div`
  width: 200px;
  height: 24px;
  margin: 20px auto;
  color: white;
  font-size: 14px;
  font-weight: 200;
  line-height: 24px;
  text-align: center;
  background-color: var(--color-blue);
  border-radius: 15px;

  svg {
    margin-right: 7px;
  }
`;

// MessageBox에서 사용
export const MessageBoxStyle = styled.div<{ $isMe: boolean }>`
  display: flex;
  margin-top: 10px;
  margin: 10px;
  ${({ $isMe }) => $isMe && "flex-direction: row-reverse;"}
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  margin: 0 10px;
`;

export const Nickname = styled.div<{ $isMe: boolean }>`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 300;

  ${({ $isMe }) => $isMe && "  text-align: right;"}
`;

export const MessageWrap = styled.div<{ $isMe: boolean }>`
  display: flex;
  align-items: flex-end;
  ${({ $isMe }) => $isMe && "flex-direction: row-reverse;"}
`;

export const Message = styled.p`
  padding: 5px 10px;
  max-width: 200px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  background-color: white;
  border-radius: 10px;
  white-space: pre-wrap;
`;

export const MessageTime = styled.span`
  font-size: 11px;
  font-weight: 300;
  margin: 0 5px;
  margin-bottom: 5px;
`;

// PostMessage에서 사용
export const PostMessageStyle = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const InputStyle = styled.textarea`
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

export const PostButton = styled.button`
  width: 10%;
  height: 120px;
  color: white;
  background-color: var(--color-main);
`;
