import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  return <div>{params.categoryId} categories</div>;
};

export default Category;
