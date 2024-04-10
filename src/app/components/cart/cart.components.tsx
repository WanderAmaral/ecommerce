'use client'

import { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import Button from "../button/button";

import { useAppleSelector } from "@/hooks/redux.hooks";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/app/store/reducers/cart/cart.action";

import CartProduct from "@/types/cart.types";
import CartItemComponent from "@/app/cart-item/cart-item-component";




const Cart: FunctionComponent = () => {
    const dispatch = useDispatch()

    const { isVisible, products } = useAppleSelector((state: any) => state.cartReducer)

    const handleClickToggleCart = () => {
        dispatch(toggleCart())
        
    }

    

    return (
        <div className={`fixed h-screen w-screen right-0 left-0 bottom-0 top-0 bg-black bg-opacity-70 flex justify-end transition-all duration-300 
        ${isVisible ? 'opacity-100 visible': 'opacity-0 invisible'}`}> 
            <div className="w-full" onClick={handleClickToggleCart}/>
            <div className="h-full w-96  bg-white p-5 overflow-y-scroll"> 
                <h1 className=" text-xl font-semibold mb-15 flex items-center justify-center mb-5">Seu  Carrinho</h1>
                {products.map((product: CartProduct) => (<CartItemComponent key={product.id} product={product}/>
            ))}

                {/* Products */}
                <p className=" font-semibold text-xl mb-4">Total: R$998</p>
                <Button startIcon={<BsCartCheck size={30}/>} >Ir Para o Checkout</Button>
            </div>
        </div>
    ) ; 
}
 
export default Cart;                                                                                                                 