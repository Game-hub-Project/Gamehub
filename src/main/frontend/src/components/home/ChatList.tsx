import { styled } from "styled-components";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  const array = Array(12).fill(0);
  return (
    <List>
      {array.map((item, index) => (
        <ChatListItem key={index} />
      ))}
    </List>
  );
};

export default ChatList;

const List = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  gap: 10px;
`;
