import CartProduct from "@/types/cart.types";
import { FunctionComponent } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { decreaseCartProductQuantity, increaseCartProductQuantity, removeProductFromCart } from "../store/reducers/cart/cart.action";

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
      {/* container */}
      <div
        className=" h-56 w-44 block rounded-lg"
        style={{
          backgroundImage: `url('${product.imageUrl}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* image */}
      </div>
      <div className="flex flex-col ml-5">
        <div className="flex items-end justify-end cursor-pointer">
          <IoMdClose size={28} onClick={handleRemoveClick} />
        </div>
        {/* content */}
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="mt-4">R$: {product.price}</p>
        <p className="mt-4">Quantidade: {product.quantity}</p>

        <div>{/* quantity */}</div>

        <div className="flex gap-3 justify-center mt-3">
          {/* remove Button */}

          <BsChevronLeft
            size={25}
            onClick={handleDecreaseClick}
            className="cursor-pointer hover:bg-zinc-400 rounded-lg"
          />

          <BsChevronRight
            size={25}
            onClick={handleIncreaseClick}
            className="cursor-pointer hover:bg-zinc-400 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
