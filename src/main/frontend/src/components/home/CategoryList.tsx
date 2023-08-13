import { CategoryList } from "./home.style";

const Category = () => {
  return (
    <nav>
      <CategoryList>
        <li>ALL</li>
        <li>RPG</li>
        <li>스포츠</li>
        <li>AOS/MOBA</li>
        <li>FPS</li>
        <li>액션RPG</li>
        <li>PVP</li>
      </CategoryList>
    </nav>
  );
};

export default Category;
