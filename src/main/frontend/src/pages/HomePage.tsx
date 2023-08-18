import Carousel from "@/components/carousel";
import Category from "@/components/home/CategoryList";
import ChatList from "@/components/home/ChatList";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Category />
      <ChatList />
    </>
  );
};

export default HomePage;
