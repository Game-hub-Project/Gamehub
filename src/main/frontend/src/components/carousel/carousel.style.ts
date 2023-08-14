import { styled } from "styled-components";

export const CarouselStyle = styled.div`
  width: 480px;
  margin-left: -10px;
  position: relative;
`;

export const Images = styled.div`
  display: flex;
  width: 400px;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 40px;
`;

export const Img = styled.img<{ $visible: boolean }>`
  min-width: 400px;
  border-radius: 8px;
  cursor: pointer;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  &:hover {
    transition: 0.3s;
    transform: scale(1.05);
  }
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  position: absolute;
  top: 85px;

  svg {
    border: 2px solid var(--color-gray);
    border-radius: 50%;
    padding: 2px;
  }
`;
