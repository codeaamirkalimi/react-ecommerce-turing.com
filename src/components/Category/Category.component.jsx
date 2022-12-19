import "./Category.style.scss";
import CategoryItemComponent from "../CategoryItem/CategoryItem.component";

const CategoryComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItemComponent key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryComponent;
