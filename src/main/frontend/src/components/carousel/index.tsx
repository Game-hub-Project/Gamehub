import { useState, useEffect } from "react";
import { ReactComponent as CarouselLeftArrowIcon } from "@/assets/CarouselLeftArrowIcon.svg";
import { ReactComponent as CarouselRightArrowIcon } from "@/assets/CarouselRightArrowIcon.svg";
import { ArrowBox, CarouselStyle, Images, Img } from "./carousel.style";

const Carousel = () => {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);

  const nextBtn = () => {
    setVisible(false);

    setTimeout(() => {
      setCount((count) => (count < 6 ? count + 1 : 1));
      setVisible(true);
    }, 500);
  };

  const prevBtn = () => {
    setVisible(false);

    setTimeout(() => {
      setCount((count) => (count > 1 ? count - 1 : 6));
      setVisible(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBtn();
    }, 3000);

    return () => {
      clearTimeout(interval);
    };
  }, [count]);

  return (
    <CarouselStyle>
      <Images>
        <Img src={`carouselImg/${count}.jpg`} $visible={visible} />
      </Images>
      <ArrowBox>
        <CarouselLeftArrowIcon onClick={prevBtn} />
        <CarouselRightArrowIcon onClick={nextBtn} />
      </ArrowBox>
    </CarouselStyle>
  );
};

export default Carousel;
