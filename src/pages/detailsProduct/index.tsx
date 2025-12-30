import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { type productProps } from "../home";
import { useContext } from "react";
import { ContextCart } from "../../services/context";
import { BsCartPlus } from "react-icons/bs";
import { getFormattedCurrency } from "../../utils/formatedValues";
import { Link } from "react-router";


export function DetailsProduct(){
    const { productId } =  useParams();
    const [product, setProduct] = useState<productProps>();
    const { AddItemCart} = useContext(ContextCart);

    useEffect(()=>{
            async function getProduct(){
                const response = await api.get(`/products/${productId}`);
                setProduct(response.data);
            }    
            getProduct();
    }, [productId])

    if (!product){
        return(
            <div className="w-full mb-4 flex flex-col items-center">
                    <h1 className="mt-10">Produto inexistente!</h1>
                    <Link to={"/"}>
                        <button className="font-medium m-5 bg-gray-900 text-white p-1 px-5 rounded">
                            Voltar
                        </button>
                    </Link>  
                </div>                
        
    )
    }


    return(
        <div className="w-full">

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 mb-4 mt-10 mx-auto">
                <div className="flex justify-center">
                    <img 
                        className="w-full max-w-72 object-contain transition-transform hover:scale-110 delay-150"
                        src={product?.cover}
                        alt={product?.title}
                    />
                </div>
                <div className="pr-6">
                    <h3 className="font-medium text-2xl">{product?.title}</h3>
                    <p className="mt-5 text-gray-700/90 font-medium">{product?.description}</p>
                    <div className="flex gap-3 mt-4">
                        <strong className="text-gray-700">{getFormattedCurrency(product?.price)}</strong>
                        <Link to={"/cart"}>
                            <button onClick={() => AddItemCart(product)} className="bg-gray-900 p-1 rounded">
                                <BsCartPlus color="white" size={20}/>
                            </button>                    
                        </Link>

                    </div>
                </div>         
            </div>

            <Link to={"/"}>
                <button className="font-medium m-5 bg-gray-900 text-white p-1 px-5 rounded">
                    Voltar
                </button>
            </Link>                


        </div>

    )
}