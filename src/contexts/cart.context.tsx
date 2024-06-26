"use client";
import CartProduct from "@/types/cart.types";
import Product from "@/types/products.type";

import { FunctionComponent, createContext, useState } from "react";

interface ICartContext {
  isVisible: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
}

interface ICartContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
});

const CartContextProvider: FunctionComponent<ICartContextProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  };

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
