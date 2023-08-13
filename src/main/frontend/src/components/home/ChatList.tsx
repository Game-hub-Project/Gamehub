import ChatListItem from "./ChatListItem";
import { ChatListStyle } from "./home.style";

const ChatList = () => {
  const array = Array(12).fill(0);
  return (
    <ChatListStyle>
      {array.map((item, index) => (
        <ChatListItem key={index} />
      ))}
    </ChatListStyle>
  );
};

export default ChatList;
