import { Action } from "redux";
import { db } from "@/config/firebase-config";
import { categoryConverter } from "@/converters/firestore.converter";
import Category from "@/types/category.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const categoriesFromFireStore: Category[] = [];
    const querySnapshot = await getDocs(
      collection(db, "categories").withConverter(categoryConverter)
    );

    querySnapshot.forEach((doc) => categoriesFromFireStore.push(doc.data()));

    return categoriesFromFireStore;
  }
);

interface InitialState {
  categories: Category[];
  isLoading: boolean;
}

const initialState: InitialState = {
  categories: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (biulder) => {
    // Inicio da action
    biulder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    // Sucesso
    biulder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    // caso de erro
    biulder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});


export default categorySlice.reducer;
