
import { createContext, useState, type ReactNode } from "react";

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextData{
    cart: CartProps[];
    quantCart: number | null | undefined;
}

interface CartProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

export const ContextCart = createContext({} as CartContextData);

export default function CartProvider ({children}: CartProviderProps){
    const [cart, setCart] = useState<CartProps[]>([]);
    const [quantCart, setQuantCart] = useState<number | null | undefined>(5);

    return(
        <ContextCart.Provider value={{cart, quantCart}}>
            {children}
        </ContextCart.Provider>
    )
}





