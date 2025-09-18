import { WishlistProductCard } from "../../Components/WishlistProductCard";
import MainLayout from "../../Layouts/MainLayout";


export default function Wishlist() {



    let clearWishlistHandler = () => {
        //
    }
    let addAllToCartHandler = () => {
        //
    }


    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex justify-between items-center flex-row gap-x-2">
                <table className="w-full ">
                    <thead className="bg-mustard">
                        <tr>
                            <th className="font-poppins text-zinc font-medium text-start py-3 px-6">Product</th>
                            <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Price</th>
                            <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Date Added</th>
                            <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Stock Status</th>
                            <th className="font-poppins text-zinc font-medium text-start py-3 "></th>
                        </tr>
                    </thead>
                    <tbody>
                        <WishlistProductCard />
                        <WishlistProductCard />
                        <WishlistProductCard />
                        <WishlistProductCard />
                    </tbody>
                </table>
            </div>
            <div className="w-full flex flex-row gap-x-8 justify-end items-center">
                <div><button onClick={clearWishlistHandler} className="text underline text-zinc font-medium cursor-pointer text-base p-1">Clear Wishlist</button></div>
                <div><button onClick={addAllToCartHandler} className="p-3 min-w-40 w-full bg-zinc text-white font-poppins hover:bg-zinc-dark transition-colors ease-linear duration-200 cursor-pointer">Add All to Cart</button></div>
            </div>
        </div>
    </section>)
}
Wishlist.layout = page => (<MainLayout heading={'Wishlist'} breadcrumb={'Home / Wishlist'}>{page}</MainLayout>);