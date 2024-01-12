'use client'
import CartProduct from "@/types/cart.types"

import { FunctionComponent, createContext, useState } from "react"


interface ICartContext {
    isVisible: boolean
    products: CartProduct[]
    toggleCart: () => void
    
}

interface ICartContextProps {
    children: React.ReactNode
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {}
})

const CartContextProvider: FunctionComponent<ICartContextProps> = ({children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [products, setProducts] = useState<CartProduct[]>([])

    const toggleCart = () => {
        setIsVisible((prevState) => !prevState)
    }

    return <CartContext.Provider value={{isVisible, products, toggleCart}}>{children}</CartContext.Provider>
}

export default CartContextProvider

