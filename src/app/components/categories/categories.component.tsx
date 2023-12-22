"use client";

import Category from "@/types/category.type";
import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import CategoryItem from "../category-item/category-item.component";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFireStore: Category[] = [];

      const querySnapshot = await getDocs(collection(db, "categories"));

      querySnapshot.forEach((doc: any) =>
        categoriesFromFireStore.push(doc.data())
      );
      setCategories(categoriesFromFireStore);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="h-full w-full flex justify-center mt-10">
      {/*categories-container */}
      <div className=" m-4 h-full w-full gap-4 grid grid-cols-2 p-30px">
        {/*categories-content */}
        {categories.map((category) => <CategoryItem category={category} key={category.id}/>)}
      </div>
    </div>
  );
};

export default Categories;
