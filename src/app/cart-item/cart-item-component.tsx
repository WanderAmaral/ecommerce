import CartProduct from "@/types/cart.types";
import { FunctionComponent } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
} from "../store/toolkit/cart/cart.slice";

interface CartProductProps {
  product: CartProduct;
}

const CartItemComponent: FunctionComponent<CartProductProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseCartProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseCartProductQuantity(product.id));
  };

  return (
    <div className="flex  items-center mb-4 text-black">
      <div
        className=" h-56 w-44  rounded-lg"
        style={{
          backgroundImage: `url('${product.imageUrl}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col ml-5">
        <div className="flex items-end justify-end cursor-pointer">
          <IoMdClose size={28} onClick={handleRemoveClick} />
        </div>

        <div className="flex flex-col justify-between gap-3">
          <p className="text-lg font-semibold">{product.name}</p>

          <div className="flex gap-3 justify-center mt-3">
            <BsChevronLeft
              size={25}
              onClick={handleDecreaseClick}
              className="cursor-pointer hover:bg-zinc-400 rounded-lg"
            />
            <div>{product.quantity}</div>
            <BsChevronRight
              size={25}
              onClick={handleIncreaseClick}
              className="cursor-pointer hover:bg-zinc-400 rounded-lg"
            />
          </div>
          <p className="mt-4 font-semibold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(product.price))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
