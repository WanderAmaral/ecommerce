'use client'

import { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import Button from "../button/button";
import { CartContext } from "@/contexts/cart.context";



const Cart: FunctionComponent = () => {
    const {toggleCart, isVisible} = useContext(CartContext)
    return (
        <div className={`fixed h-screen w-screen right-0 left-0 bottom-0 top-0 bg-black bg-opacity-70 flex justify-end transition-all duration-300 
        ${isVisible ? 'opacity-100 visible': 'opacity-0 invisible'}`}> 
            <div className="w-full" onClick={toggleCart}/>
            <div className="h-full w-96  bg-white p-5 overflow-y-scroll"> 
                <h1 className=" text-xl font-semibold mb-15">Seu  Carrinho</h1>

                {/* Products */}
                <p className=" font-semibold text-xl mb-4">Total: R$998</p>
                <Button startIcon={<BsCartCheck size={30}/>} >Ir Para o Checkout</Button>
            </div>
        </div>
    ) ; 
}
 
export default Cart;                                                                                                                 