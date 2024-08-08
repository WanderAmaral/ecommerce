"use client";
import { FunctionComponent, useEffect } from "react";
import CategoryOverview from "./category-overview-component";
import { useAppleSelector } from "@/hooks/redux.hooks";
import { useDispatch } from "react-redux";
import { fetchCategories } from "@/app/store/toolkit/category/category.slice";
import Loading from "@/app/components/loading/loading.component";

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading } = useAppleSelector(
    (state) => state.categoryReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) dispatch(fetchCategories() as any);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="px-10 flex items-center flex-col justify-center">
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesOverview;
