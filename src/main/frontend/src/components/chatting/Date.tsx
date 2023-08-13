import { styled } from "styled-components";
import { ReactComponent as CalendarIcon } from "@/assets/CalendarIcon.svg";
const Date = () => {
  return (
    <DateStyle>
      <CalendarIcon />
      2023년 8월 12일 토요일
    </DateStyle>
  );
};

export default Date;

const DateStyle = styled.div`
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
