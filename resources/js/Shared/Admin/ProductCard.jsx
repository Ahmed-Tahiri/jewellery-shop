export let ProductCard = ({ quantity, price, category, title, img }) => {
    return <div className="w-60 shadow flex flex-col rounded p-2 gap-y-1">
        <div className="bg-powder-gray w-full rounded-t-[2px]">
            <img src={img} alt="jewellery item picture" className="w-full h-50" />
        </div>

        <div className="w-full flex flex-col gap-y-1 items-start justify-between">
            <span className="text-sm font-poppins text-light-gray font-normal">{category}</span>
            <p className="font-poppins text-lg text-semi-black font-normal">{title}</p>
        </div>
        <div className="w-full mt-2 flex flex-row justify-between items-center">
            <p className="text-lg font-poppins font-semibold text-semi-black">{price}</p>
            <p className="text-sm font-poppins font-medium text-semi-black">{quantity} Stock</p>
        </div>

    </div>
}