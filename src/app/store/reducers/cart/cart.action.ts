import CartActionTypes from "./cart-actions-types"
import Product from "@/types/products.type"

export const toggleCart = () => ({   
    type: CartActionTypes.toggleCart
})



export const addProductToCart = (payload: Product) => ({
    type: CartActionTypes.addProductToCart,
    payload
  })