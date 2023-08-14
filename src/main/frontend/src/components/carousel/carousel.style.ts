import { styled } from "styled-components";

export const CarouselStyle = styled.div`
  width: 420px;
  margin-left: -10px;
  position: relative;
`;

export const Images = styled.div`
  display: flex;
  width: 360px;
  height: 150px;
  overflow: hidden;
  margin: 0 30px;
`;

export const Img = styled.img<{ $visible: boolean }>`
  min-width: 360px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: scale(1.05);
  }

  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  position: absolute;
  top: 70px;

  svg {
    border: 3px solid var(--color-gray);
    border-radius: 50%;
    padding: 2px;
  }
`;
