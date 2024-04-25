"use client";
import { db } from "@/config/firebase-config";
import { categoryConverter } from "@/converters/firestore.converter";
import Category from "@/types/category.type";
import { collection, getDocs } from "firebase/firestore";
import React, {
  FunctionComponent,
  createContext,
  useEffect,
  useState,
} from "react";

interface ICategoryContext {
  categories: Category[];
  fetchCategories: () => Promise<void>;
  isLoading: boolean;
}
interface ICategoryContextProviderProps {
  children: React.ReactNode;
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false,
});

const CategoryContextProvider: FunctionComponent<
  ICategoryContextProviderProps
> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const categoriesFromFireStore: Category[] = [];

      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc: any) =>
        categoriesFromFireStore.push(doc.data())
      );
      setCategories(categoriesFromFireStore);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
