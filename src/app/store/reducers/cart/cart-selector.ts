import { RootState } from "../../store";

export const selectProductTotalPrice = (state: RootState) => {
  return state.cartReducer?.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity;
  }, 0);
};

export const selectProductCount = (state: RootState) => {
  return state.cartReducer?.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.quantity;
  }, 0);
};
