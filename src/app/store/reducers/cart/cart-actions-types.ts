const CartActionTypes = {
  toggleCart: "cart/toggle" as const,
  addProductToCart: "cart/addProduct" as const,
  removeProductToCart: "cart/removeProduct" as const,
  increaseProductQuanityCart: "cart/increaseQuantity" as const,
  decreaseProductQuanityCart: "cart/decreaseQuantity" as const,
  clearCartProducts: "cart/clearProducts" as const,
};

export default CartActionTypes;
