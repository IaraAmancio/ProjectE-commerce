import { useContext } from "react";
import { ContextCart } from "../../services/context";
import { Link } from "react-router";
import { getFormattedCurrency } from "../../utils/formatedValues";

export function Cart(){
    const {cart, total, AddItemCart, RemoveItemCart} = useContext(ContextCart);
    

    return(
        <div className="w-full">
            <main className="w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-medium text-center my-4">Meu carrinho</h1>

                { cart.length === 0 && (
                    <div className="w-full flex flex-col justify-center items-center">
                        <p className="font-medium">Ops, seu carrinho esta vazio...</p>
                        <Link to={"/"}>
                         <button className="font-medium m-3 bg-slate-600 text-white p-1 px-3 rounded">
                            Ver produtos
                        </button>
                        </Link>
                    </div>
                )

                }
                <div className="w-full">
                {
                    cart.map((product) => (
                        <section key={product.id} className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
                            <img
                            className="w-28"
                            src={product.cover}
                            alt={product.title}
                            />
                            <strong>Preço: {getFormattedCurrency(product.price)}</strong>
                            <div className="flex items-center justify-center gap-3">
                                <button onClick={() => {RemoveItemCart(product)}} className="bg-slate-600 text-white font-medium flex items-center justify-center px-2 rounded">-</button>
                                <span>{product.amount}</span>
                                <button onClick={()=>{AddItemCart(product)}} className="bg-slate-600 text-white font-medium px-2 flex items-center justify-center rounded">+</button>
                            </div>
                            <strong className="float-right">Subtotal: {getFormattedCurrency(product.total)}</strong>
                        </section>
                    ))
                }
                {
                    cart.length !== 0 && (<p className="flex font-black mt-4">Total: {getFormattedCurrency(total)}</p>)
                }
                </div>
            </main>
        </div>
    )
}