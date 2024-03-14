import Product from "@/types/products.type";
import { FunctionComponent } from "react";
import Image from "next/image";
import Button from "@/app/components/button/button";

interface ProductItemProps {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({product}) => {
    return ( 
        <div className="flex flex-col">
            <div className=" h-96 w-72 bg-cover bg-no-repeat bg-center rounded-lg shadow-xl">
            <Image alt={product.name} src={product.imageUrl} width={100} height={200} sizes="100vh" className="h-81 w-full"/>
            <Button>Adicionar ao carrinho</Button></div>
            <div className="flex justify-between mt-5 ">
                <p className=" text-base font-medium">{product.name}</p>
                <p className=" text-base font-medium">R$: {product.price}</p>
            </div>
            
        </div>
     );
}
 
export default ProductItem;