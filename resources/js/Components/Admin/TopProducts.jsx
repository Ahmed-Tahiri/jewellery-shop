import { ProductCard } from "../../Shared/Admin/ProductCard";

export let TopProducts = () => {

    let topProductsData = [
        {
            title: 'Sparking Diamond Necklace',
            category: 'Necklace',
            img: 'https://pngimg.com/uploads/necklace/necklace_PNG43.png',
            price: '120,000 PKR',
            quantity: '45'
        },
        {
            title: 'Gold Ring',
            category: 'Ring',
            img: 'https://pngimg.com/uploads/jewelry/jewelry_PNG6770.png',
            price: '23,500 PKR',
            quantity: '17'
        },
        {
            title: 'Red Ruby Silver Earrings',
            category: 'Earring',
            img: 'https://pngimg.com/uploads/jewelry/jewelry_PNG6717.png',
            price: '11,900 PKR',
            quantity: '38'
        },
        {
            title: 'Indian Gold Bracelet',
            category: 'Bracelet',
            img: 'https://www.pngarc.com/wp-content/uploads/2023/05/Bangle-jewellery-gold-bracelet-silver-jewellery-png.png',
            price: '37,100 PKR',
            quantity: '78'
        },
    ];



    return (
        <div className="flex w-full bg-white shadow rounded flex-col gap-y-5 p-5">
            <h4 className="font-poppins text-lg font-medium text-semi-black">Top Products</h4>
            <div className="flex flex-row flex-wrap gap-7 items-center">
                {topProductsData.map((product, idx) => <ProductCard key={`topProductCard${idx + 1}`} title={product.title} img={product.img} category={product.category} price={product.price} quantity={product.quantity} />)}
            </div>
        </div>
    );
}