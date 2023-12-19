"use client"

import Category from "@/types/category.type";
import { useEffect, useState } from "react";
import axios from "axios";
import env from "@/config/env.config";


const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  console.log(categories);
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="h-full w-full flex justify-center mt-10">
      {/*categories-container */}
      <div className="h-full w-1920px gap-4 grid grid-cols-2 p-30px">
        {/*categories-content */}
        {/* {categories.map((category) => <CategoryItem />)} */}
      </div>
    </div>
  );
};

export default Categories;
