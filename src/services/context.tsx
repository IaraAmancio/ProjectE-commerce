
import { createContext, useState, type ReactNode } from "react";
import { type productProps } from "../pages/home";

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    total: number;
    AddItemCart: (cart: productProps) => void;
    RemoveItemCart: (product: CartProps) => void;
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
    const [valueTotal, setValueTotal] = useState<number>(0);

    function addItemCart(product: productProps){
        let index = cart.findIndex(cartItem => cartItem.id === product.id)

        if(index !== -1){
            let cartList = cart;
            cartList[index].amount = cartList[index].amount + 1;
            cartList[index].total = cartList[index].price * cartList[index].amount;

            setCart(cartList);
            totalResult(cartList);
            return;
        }

        let data = {
            ...product,
            amount: 1,
            total: product.price
        }

        setCart([...cart, data]);
        totalResult([...cart, data]);
    }

    function removeItemCart(newProduct: CartProps){
        let index = cart.findIndex((item)=> item.id === newProduct.id);

        if(cart[index].amount > 1){
            // diminuir valor de amount
            let data = cart;
            data[index].amount = data[index].amount - 1;
            data[index].total = data[index].amount * data[index].price;
            setCart(data);
            totalResult(data);
            return;
        }
        // remove o item
        let data = cart.filter((item)=> item.id !== newProduct.id);
        setCart(data);
        totalResult(data);
    }

    function totalResult(carts: CartProps[]){
        let sum = carts.reduce((previosValue, currentValue)=> previosValue + currentValue.total,0);
        setValueTotal(sum);
    }

    return(
        <ContextCart.Provider value={{cart, cartAmount: cart.length, total: valueTotal, AddItemCart: addItemCart,RemoveItemCart: removeItemCart}}>
            {children}
        </ContextCart.Provider>
    )
}





