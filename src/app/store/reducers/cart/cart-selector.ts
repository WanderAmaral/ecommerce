import { RootState } from "../../store";

export const selectProductTotalPrice = (state: RootState) => {
  //@ts-ignore
  return state.cartReducer?.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity;
  }, 0);
};

export const selectProductCount = (state: RootState) => {
  //@ts-ignore
  return state.cartReducer?.products.reduce((acc, currentProduct) => {
    return acc + currentProduct;
  }, 0);
};
