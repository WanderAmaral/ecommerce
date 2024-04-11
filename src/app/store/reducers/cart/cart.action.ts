import CartActionTypes from "./cart-actions-types";
import Product from "@/types/products.type";

interface ToggleCartAction {
  type: typeof CartActionTypes.toggleCart;
}

export const toggleCart = (): ToggleCartAction => ({
  type: CartActionTypes.toggleCart,
});

interface AddProductToCartAction {
  type: typeof CartActionTypes.addProductToCart;
  payload: Product;
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: CartActionTypes.addProductToCart,
  payload,
});

interface RemoveProductToCartAction {
  type: typeof CartActionTypes.removeProductToCart;
  payload: string;
}

export const removeProductToCart = (
  payload: string
): RemoveProductToCartAction => ({
  type: CartActionTypes.removeProductToCart,
  payload,
});

interface IncreaseProductToCartAction {
  type: typeof CartActionTypes.increaseProductQuanityCart;
  payload: string;
}

export const increaseProductFromCart = (
  payload: string
): IncreaseProductToCartAction => ({
  type: CartActionTypes.increaseProductQuanityCart,
  payload,
});

interface DecreaseProductToCartAction {
  type: typeof CartActionTypes.decreaseProductQuanityCart;
  payload: string;
}

export const decreaseProductFromCart = (
  payload: string
): DecreaseProductToCartAction => ({
  type: CartActionTypes.decreaseProductQuanityCart,
  payload,
});

interface ClearProductsToCartAction {
  type: typeof CartActionTypes.clearCartProducts;
}

export const clearProductsToCart = (): ClearProductsToCartAction => ({
  type: CartActionTypes.clearCartProducts,
});

export type CartActions =
  | ToggleCartAction
  | AddProductToCartAction
  | IncreaseProductToCartAction
  | RemoveProductToCartAction
  | ClearProductsToCartAction
  | DecreaseProductToCartAction;
