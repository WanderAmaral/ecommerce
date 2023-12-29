"use client";

import Category from "@/types/category.type";
import { useCallback, useContext, useEffect, useState } from "react";


import { getDocs, collection } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import CategoryItem from "./category-item.component";
import { categoryConverter } from "@/converters/firestore.converter";
import { CategoryContext } from "@/contexts/category.context";
import Loading from "@/app/components/loading/loading.component";

const Categories = () => {
  const {categories, isLoading} = useContext(CategoryContext)
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

export default Categories;
