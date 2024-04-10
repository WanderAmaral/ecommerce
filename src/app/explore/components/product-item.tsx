import Product from "@/types/products.type";
import { FunctionComponent} from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/app/store/reducers/cart/cart.action";

interface ProductItemProps {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({product}) => {
    const dispatch = useDispatch()

    const handleClickAddProduct = () => {
        dispatch(addProductToCart(product))
        
    }
 
    return ( 
        <div className="flex flex-col">
            <div className=" h-96 w-56  bg-cover bg-no-repeat bg-center rounded-lg shadow-xl cursor-pointer" onClick={handleClickAddProduct}>
            <Image alt={product.name} src={product.imageUrl} width={100} height={100} sizes="100vh" className="h-full w-full" />
            <div className="flex justify-between">
                <p className=" text-base font-medium">{product.name}</p>
                <p className=" text-base font-medium">R$: {product.price}</p>
            </div>
           </div>
            
        </div>
     );
}
 
export default ProductItem;