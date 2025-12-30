
import {BsCartPlus} from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getFormattedCurrency } from "../../utils/formatedValues";
import { ContextCart } from "../../services/context";
import { useContext } from "react";


export interface productProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){
    const [products, setProducts] = useState<productProps[]>([]);
    const {AddItemCart: AddCart} = useContext(ContextCart);

    useEffect(()=>{
        async function getProducts(){
            const response = await api.get('/products');
            setProducts(response.data);
        }

        getProducts();
    },
     [])

    function handleAddCartItem(product: productProps){
        AddCart(product);
        console.log("entrei");
    }


    return(
        <div className="w-full">
            <main className="w-full max-w-7xl px-4 mb-4 mx-auto">
                <h1 className="text-2xl font-bold text-center mt-10 mb-4">Produtos em alta</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {
                        products.map((product) =>{ return(
                            <section className="w-full">
                                <img className="w-full max-h-70 rounded-lg mb-2" src={product.cover}
                                alt={product.title}
                                />
                                <p className="font-medium mt-1 mb-2">{product.title}</p>
                                <div className="flex gap-3 items-center">
                                    <strong className="text-gray-700/90">{getFormattedCurrency(product.price)}</strong>
                                    <button onClick={() => handleAddCartItem(product)} className="bg-gray-900 p-1 rounded">
                                        <BsCartPlus color="white" size={20}/>
                                    </button>
                                </div>
                            </section>    
                        )})
                    }

                </div>
            </main>
        </div>
    )
}