import { ReactComponent as CalendarIcon } from "@/assets/CalendarIcon.svg";
import { DateStyle } from "./chatting.style";

const Date = () => {
  return (
    <DateStyle>
      <CalendarIcon />
      2023년 8월 12일 토요일
    </DateStyle>
  );
};

export default Date;
