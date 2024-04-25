import { db } from "@/config/firebase-config";
import { categoryConverter } from "@/converters/firestore.converter";
import Category from "@/types/category.type";
import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import CategoryActionTypes from "./category-action-types";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_START });

    try {
      const categoriesFromFireStore: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc: any) =>
        categoriesFromFireStore.push(doc.data())
      );

      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_SUCESS,
        payload: categoriesFromFireStore,
      });
    } catch (error) {
      dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE });
    }
  };
};
