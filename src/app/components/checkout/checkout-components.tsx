"use client";
import { FunctionComponent } from "react";
import { BsBagCheck } from "react-icons/bs";
import { useAppleSelector } from "@/hooks/redux.hooks";
import Button from "../button/button";
import CartItemComponent from "@/app/cart-item/cart-item-component";
import { selectProductTotalPrice } from "../../store/reducers/cart/cart-selector";

const Checkout: FunctionComponent = () => {
  const { products } = useAppleSelector((state) => state.cartReducer);
  const productsTotalPrice = useAppleSelector(selectProductTotalPrice);

  return (
    <div className="flex flex-col items-center pt-7 pb-7 overflow-hidden">
      <p className="font-bold text-[1.325rem] text-gray-800">Checkout</p>

      {products.length > 0 ? (
        <div>
          <div className="min-w-[650px] mt-3 mb-3 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-800">
            {products.map((product) => (
              <CartItemComponent key={product.id} product={product} />
            ))}
          </div>

          <p className="w-[650px] text-[1.125rem] font-semibold mb-3 ">
            {Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(productsTotalPrice)}
          </p>

          <div className="w-full flex justify-center">
            <Button startIcon={<BsBagCheck />} className="w-[650px]">
              Finalizar Compra
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-800">Seu carrinho está vazio!</p>
      )}
    </div>
  );
};

export default Checkout;
