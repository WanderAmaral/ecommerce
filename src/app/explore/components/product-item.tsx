import Product from "@/types/products.type";
import { FunctionComponent } from "react";
import Image from "next/image";

interface ProductItemProps {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({product}) => {
    return ( 
        <div className="flex flex-col">
            <div className=" h-96 w-72 bg-cover bg-no-repeat bg-center rounded-lg shadow-xl"><Image alt={product.name} src={product.imageUrl} width={0} height={0} sizes="100vh"/></div>
            <div className="flex justify-between mt-5 ">
                <p className=" text-base font-medium">{product.name}</p>
                <p className=" text-base font-medium">R$: {product.price}</p>
            </div>
            
        </div>
     );
}
 
export default ProductItem;