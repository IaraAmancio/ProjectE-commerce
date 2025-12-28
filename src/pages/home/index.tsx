
import {BsCartPlus} from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getFormattedCurrency } from "../../utils/formatedValues";

interface productsProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){
    const [products, setProducts] = useState<productsProps[]>([]);

    useEffect(()=>{
        async function getProducts(){
            const response = await api.get('/products');
            setProducts(response.data);
        }

        getProducts();
    },
     [])


    return(
        <div className="w-full">
            <main className="w-full max-w-7xl px-4 mb-4 mx-auto">
                <h1 className="text-2xl font-bold text-center mt-10 mb-4">Produtos em alta</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {
                        products.map((item) =>{ return(
                            <section className="w-full">
                                <img className="w-full max-h-70 rounded-lg mb-2" src={item.cover}
                                alt={item.title}
                                />
                                <p className="font-medium mt-1 mb-2">{item.title}</p>
                                <div className="flex gap-3 items-center">
                                    <strong className="text-gray-700/90">{getFormattedCurrency(item.price)}</strong>
                                    <button className="bg-gray-900 p-1 rounded">
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