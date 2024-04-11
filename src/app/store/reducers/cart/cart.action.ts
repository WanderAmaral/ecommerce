import CartActionTypes from "./cart-actions-types";
import Product from "@/types/products.type";

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart,
});

export const addProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload,
});

export const removeProductToCart = (payload: string) => ({
  type: CartActionTypes.removeProductToCart,
  payload,
});

export const increaseProductFromCart = (payload: string) => ({
  type: CartActionTypes.increaseProductQuanityCart,
  payload,
});

export const decreaseProductFromCart = (payload: string) => ({
  type: CartActionTypes.decreaseProductQuanityCart,
  payload,
});

export const clearProductsToCart = () => ({
  type: CartActionTypes.clearCartProducts,
});
