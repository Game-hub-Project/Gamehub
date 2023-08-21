import { useEffect, useState, useRef, useMemo } from "react";
import ChatListItem from "./ChatListItem";
import { ChatListStyle } from "./home.style";
import LoadingIcon from "../common/Loading";

const ChatList = () => {
  const [chatList, setChatList] = useState<number[]>([]);
  const [page, setPage] = useState(1); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false);
  const io = useMemo(() => observer(setPage), []);
  const pageEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPins(page, setChatList, setLoading);
  }, [page]);

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      if (pageEnd.current !== null) {
        //옵져버 탐색 시작
        io.observe(pageEnd.current);
      }
    }
  }, [loading]);

  return (
    <ChatListStyle>
      {chatList.map((item, index) => (
        <ChatListItem key={index} />
      ))}
      <LoadingIcon ref={pageEnd} />
    </ChatListStyle>
  );
};

export default ChatList;

const fetchPins = (
  page: number,
  setChatList: React.Dispatch<React.SetStateAction<number[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const array = Array(5).fill(page);
  setChatList((prev) => [...prev, ...array]);
  setLoading(true);
};

const observer = (setPage: React.Dispatch<React.SetStateAction<number>>) => {
  return new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => ++prev);
      }
    },
    { threshold: 1 }
  );
};
