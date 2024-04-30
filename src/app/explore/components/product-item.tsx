import Product from "@/types/products.type";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/app/store/toolkit/cart/cart.slice";
import Button from "@/app/components/button/button";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickAddProduct = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="flex border rounded-lg border-black">
      <div
        className=" h-80 w-56 rounded-lg shadow-xl cursor-pointer hover:opacity-70 border-r border-black"
        style={{
          backgroundImage: `url('${product.imageUrl}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center pt-20 px-2">
          <p className=" text-2xl font-bold pb-5">{product.name}</p>
          <p className=" text-3xl font-bold">R$: {product.price},00</p>
        </div>

        <div>
          <Button onClick={handleClickAddProduct}>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
