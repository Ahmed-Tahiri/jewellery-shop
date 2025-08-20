export let Landing = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Discover Our Exclusive Jewellery Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mb-6 text-sm sm:text-base"> Elegant designs crafted with love and precision. Perfect for every occasion. </p>
            <button className="px-5 sm:px-6 py-2 sm:py-3 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700 transition text-sm sm:text-base">
                Shop Now
            </button>
        </section>);

}