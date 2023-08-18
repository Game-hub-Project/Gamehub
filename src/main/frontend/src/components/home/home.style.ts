import { styled } from "styled-components";

// CategoryList컴포넌트 사용
export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  font-size: 15px;
  font-weight: 300;

  li {
    &:hover {
      text-decoration: underline;
    }
  }
`;

// ChatList컴포넌트 사용
export const ChatListStyle = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  gap: 10px;
`;

// ChatListItem컴포넌트 사용
export const ListStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 15px;

  transition: transform 400ms;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 26px 23px -6px rgba(140, 142, 166, 0.65);
  }
`;

export const ImgStyle = styled.img`
  width: 100%;
  margin: auto;
  max-height: 200px;
  transition: transform 400ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const GameInfo = styled.div`
  margin-top: 10px;
  margin-left: 5px;
`;

export const GameName = styled.span`
  word-wrap: break-word;
  font-weight: 500;
`;

export const GameCategory = styled.p`
  margin-top: 5px;
  color: var(--color-gray-2);
  font-size: 14px;
  font-weight: 200;
`;
