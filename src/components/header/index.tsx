import { Link } from "react-router";
import { FiShoppingCart} from "react-icons/fi";
import { useContext } from "react";
import { ContextCart } from "../../services/context";

export function Header(){
    const {cartAmount} = useContext(ContextCart);

    return(
        <header className="w-full bg-slate-200 px-1">
            <nav className="w-full max-w-7xl flex justify-between items-center h-14 px-5 mx-auto">
                <Link className="font-bold text-2xl" to={'/'}>
                    Dev Shop
                </Link>
                <Link className="relative" to={'/cart'}>
                    <FiShoppingCart size={24} color="#121212"/>
                    {cartAmount!==0 && <span className="absolute -right-3 -top-3 bg-sky-500 h-5 w-5 px-2.5 rounded-full text-white text-xs flex items-center justify-center">{cartAmount}</span>
}
                </Link>
            </nav>
        </header>
    )
}