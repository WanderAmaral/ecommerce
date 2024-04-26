"use client";
import { useAppleSelector } from "@/hooks/redux.hooks";
import CategoryItem from "./category-item.component";
import Loading from "@/app/components/loading/loading.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "@/app/store/toolkit/category/category.slice";

export const Categories = () => {
  const { isLoading, categories } = useAppleSelector(
    (state) => state.categoryReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, []);

  return (
    <div className="h-full w-full flex justify-center mt-10">
      {/*categories-container */}
      {isLoading && <Loading />}
      <div className=" m-4 h-full w-full gap-4 grid grid-cols-2 p-30px">
        {/*categories-content */}
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};
