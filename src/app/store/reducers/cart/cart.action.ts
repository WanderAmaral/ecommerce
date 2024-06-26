import Product from "@/types/products.type";
import CartActionTypes from "./cart-actions-types";

interface ToggleCartAction {
  type: typeof CartActionTypes.toggleCart;
  [key: string]: any;
}

export const toggleCart = (): ToggleCartAction => ({
  type: CartActionTypes.toggleCart,
});

interface AddProductToCartAction {
  type: typeof CartActionTypes.addProductToCart;
  payload: Product;
  [key: string]: any;
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: CartActionTypes.addProductToCart,
  payload,
});

interface RemoveProductFromCartAction {
  type: typeof CartActionTypes.removeProductFromCart;
  payload: string;
  [key: string]: any;
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionTypes.removeProductFromCart,
  payload,
});

interface IncreaseCartProductQuantityAction {
  type: typeof CartActionTypes.increaseCartProductQuantity;
  payload: string;
  [key: string]: any;
}

export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantityAction => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload,
});

interface DecreaseCartProductQuantityAction {
  type: typeof CartActionTypes.decreaseCartProductQuantity;
  payload: string;
  [key: string]: any;
}

export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantityAction => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload,
});

interface ClearCartProductsAction {
  type: typeof CartActionTypes.clearCartProducts;
  [key: string]: any;
}

export const clearCartProducts = (): ClearCartProductsAction => ({
  type: CartActionTypes.clearCartProducts,
});

export type CartActions =
  | ToggleCartAction
  | AddProductToCartAction
  | IncreaseCartProductQuantityAction
  | DecreaseCartProductQuantityAction
  | RemoveProductFromCartAction
  | ClearCartProductsAction;
