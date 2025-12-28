

export function Cart(){
    return(
        <div className="w-full">
            <main className="w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-medium text-center my-4">Meu carrinho</h1>
                <div className="w-full">
                    <section className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
                        <img
                        className="w-28"
                        src="data:image/webp;base64,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"
                        alt="logo do produto"
                        />
                        <strong>Preço: 1099,99</strong>
                        <div className="flex items-center justify-center gap-3">
                            <button className="bg-slate-600 text-white font-medium flex items-center justify-center px-2 rounded">-</button>
                            <span>1</span>
                            <button className="bg-slate-600 text-white font-medium px-2 flex items-center justify-center rounded">+</button>
                        </div>
                        <strong className="float-right">Subtotal: R$ 1.099,99</strong>
                    </section>
                    <p className="flex font-black mt-4">Total: R$ 1.000,00</p>
                </div>
            </main>
        </div>
    )
}