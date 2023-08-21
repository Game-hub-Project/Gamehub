import MainBackGround from "/img/MainBackGround.jpg";

import {
  ListStyle,
  ImgWrap,
  ImgStyle,
  GameInfo,
  GameName,
  GameCategory,
} from "./home.style";

const ChatListItem = () => {
  return (
    <ListStyle>
      <ImgWrap>
        <ImgStyle src={MainBackGround} alt="게임이미지" />
      </ImgWrap>
      <GameInfo>
        <GameName>League of Legends</GameName>
        <GameCategory>MOBA, AOS</GameCategory>
      </GameInfo>
    </ListStyle>
  );
};

export default ChatListItem;
