import Category from "@/types/category.type";
import React, { FunctionComponent } from "react";
import ProductItem from "./product-item";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category,
}) => {
  return (
    <div className="flex flex-col w-full py-8">
      <p className=" text-xl font-medium pt-10">{category.displayName}</p>
      <div className="flex justify-between flex-wrap ">
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryOverview;
