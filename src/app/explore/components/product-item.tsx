import Product from "@/types/products.type";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/app/store/toolkit/cart/cart.slice";
import Button from "@/app/components/button/button";
import Modal from "@/app/components/modal/modal";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const [modalIsShow, setModalIsShow] = useState(false);

  const dispatch = useDispatch();

  const handleClickAddProduct = () => {
    dispatch(addProductToCart(product));
    setModalIsShow(true);
  };

  const handleCloseModal = () => {
    setModalIsShow(false);
  };

  return (
    <div className="flex border rounded-lg border-black w-[350px]">
      <div
        className="h-80 w-56 rounded--lg shadow-xl cursor-pointer hover:opacity-70 border-r border-black"
        style={{
          backgroundImage: `url('${product.imageUrl}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center pt-10">
          <p className=" text-xl font-bold pb-5 text-center">{product.name}</p>
          <p className=" text-2xl font-bold">R$: {product.price},00</p>
        </div>

        <div>
          <Button className="rounded-l-none hover:bg-zinc-600" onClick={handleClickAddProduct}>
            Adicionar ao carrinho
          </Button>
        </div>

        <Modal isOpen={modalIsShow} onClose={handleCloseModal} title="Sucesso!">
          <p>O produto foi adicionado ao carrinho com sucesso.</p>
        </Modal>
      </div>
    </div>
  );
};

export default ProductItem;
