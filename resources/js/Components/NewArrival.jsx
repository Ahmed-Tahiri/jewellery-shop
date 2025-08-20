export let NewArrival = () => {
    const products = [
        {
            id: 1,
            title: "Diamond Ring",
            price: "$500",
            image:
                "https://goldsmith.store/wp-content/uploads/2023/11/Kuldsormus-briljandiga-1-scaled.jpeg",
        },
        {
            id: 2,
            title: "Gold Necklace",
            price: "$350",
            image:
                "https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/u/punonk006_c1_1.jpg",
        },
        {
            id: 3,
            title: "Silver Earrings",
            price: "$120",
            image:
                "https://m.media-amazon.com/images/I/41ASGBoi0zL._UY1100_.jpg",
        },
    ];
    return (<section id="new-arrivals" className="px-4 sm:px-8 py-12 sm:py-16 flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">
            New Arrivals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
                    <img src={product.image} alt={product.title} className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
                    />
                    <h4 className="text-base sm:text-lg font-semibold text-gray-700">{product.title}</h4>
                    <p className="text-yellow-700 font-medium text-sm sm:text-base">{product.price}</p>
                    <button className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition text-sm sm:text-base self-start">View Details</button>
                </div>
            ))}
        </div>
    </section>);
}