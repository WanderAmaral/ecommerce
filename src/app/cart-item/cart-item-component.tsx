import CartProduct from "@/types/cart.types";
import { FunctionComponent } from "react";
import Button from "../components/button/button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface CartProductProps {
   product: CartProduct
}

const CartItemComponent:FunctionComponent<CartProductProps> = ({product}) => {
    return ( <div className="flex flex-col items-center mb-4 text-black">
        {/* container */}
                <div className=" h-64 w-44 block rounded-lg" style={{backgroundImage: `url('${product.imageUrl}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    {/* image */}
                </div>
                <div className="flex flex-col ml-5 items-center">
                    {/* content */}
                        <p className="text-xl font-semibold">
                            {product.name}
                        </p>
                        <p>
                            R$: {product.price}
                        </p>
                        <p>Quantidade: {product.quantity}</p>
                    
                    <div>
                        {/* quantity */}
                    </div>
                </div>
                <div className="flex gap-5">
                    {/* remove Button */}
                    
                    <BsChevronLeft size={25}/>
                    
                    
                    <BsChevronRight size={25}/>
                    
                </div>
        </div> );
}
 
export default CartItemComponent;