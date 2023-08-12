import { styled } from "styled-components";

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

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  padding: 10px;
  font-size: 15px;
  font-weight: 300;

  li {
    &:hover {
      text-decoration: underline;
    }
  }
`;
