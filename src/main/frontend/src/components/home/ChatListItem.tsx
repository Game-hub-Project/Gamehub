import { styled } from "styled-components";
import MainBackGround from "/img/MainBackGround.jpg";

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

const ListStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
`;

const ImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 15px;

  transition: transform 400ms;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 26px 23px -6px rgba(140, 142, 166, 0.65);
  }
`;

const ImgStyle = styled.img`
  width: 100%;
  margin: auto;
  max-height: 200px;
  transition: transform 400ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const GameInfo = styled.div`
  margin-top: 10px;
  margin-left: 5px;
`;

const GameName = styled.span`
  word-wrap: break-word;
  font-weight: 500;
`;

const GameCategory = styled.p`
  margin-top: 5px;
  color: var(--color-gray-2);
  font-size: 14px;
  font-weight: 200;
`;
