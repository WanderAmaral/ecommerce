"use client";

import { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import Button from "../button/button";

import { useAppleSelector } from "@/hooks/redux.hooks";
import { useDispatch } from "react-redux";

import CartProduct from "@/types/cart.types";
import CartItemComponent from "@/app/cart-item/cart-item-component";
import { selectProductTotalPrice } from "@/app/store/reducers/cart/cart-selector";
import { toggleCart } from "@/app/store/toolkit/cart/cart.slice";
import { useRouter } from "next/navigation";

const Cart: FunctionComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isVisible, products } = useAppleSelector(
    (state: any) => state.cartReducer
  );

  const productTotalPrice = useAppleSelector(selectProductTotalPrice);

  const handleClickToggleCart = () => {
    dispatch(toggleCart());
  };

  const handleClickCheckout = () => {
    dispatch(toggleCart());
    router.push("/checkout");
  };

  return (
    <div
      className={`fixed h-screen w-screen right-0 left-0 bottom-0 top-0 bg-black bg-opacity-70 flex justify-end transition-all duration-300 
        ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="w-full" onClick={handleClickToggleCart} />
      <div className="h-full w-96  bg-white p-5 overflow-y-scroll justify-between">
        <h1 className=" text-xl font-semibold mb-15 flex items-center justify-center mb-5">
          Seu Carrinho
        </h1>
        {products.map((product: CartProduct) => (
          <CartItemComponent key={product.id} product={product} />
        ))}

        {/* Products */}
        {productTotalPrice === 0 ? (
          <>
            <h1 className="font-bold text-xl">Vamos comprar algo?</h1>
          </>
        ) : (
          <div>
            <p className="  text-xl mb-4">
              Preço Total: R$:{" "}
              <span className=" font-semibold">
                {Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  minimumFractionDigits: 2,
                }).format(productTotalPrice)}
              </span>
            </p>
            <Button
              onClick={handleClickCheckout}
              className=" rounded-l-lg bg-green-400 text-black"
              startIcon={<BsCartCheck size={30} />}
            >
              Ir Para o Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
