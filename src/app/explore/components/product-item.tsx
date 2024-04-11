import Product from "@/types/products.type";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/app/store/reducers/cart/cart.action";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickAddProduct = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="flex flex-col">
      <div
        className=" h-96 w-56 rounded-lg shadow-xl cursor-pointer hover:opacity-70"
        onClick={handleClickAddProduct}
        style={{
          backgroundImage: `url('${product.imageUrl}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col ">
        <p className=" text-[16px] font-bold">{product.name}</p>
        <p className=" text-lg font-medium">R$: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
