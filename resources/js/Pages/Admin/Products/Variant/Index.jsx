import { Link, router, usePage } from "@inertiajs/react";

export default function Index({ product }) {
    const { flash } = usePage().props;
    if (!flash.success) router.visit(route('dashboard'));

    return <section className="w-full min-h-170 ">
        <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex flex-col justify-center items-center mt-10 bg-white rounded shadow p-10 gap-y-10">
                <h1 className="font-poppins text-zinc text-3xl font-medium text-center">{flash.success}</h1>
                <div className="w-full flex items-center justify-center">
                    <div className="w-100 flex flex-row gap-x-5">
                        <div className="flex-1">
                            <Link className="w-full inline-block font-poppins p-3 shadow-sm text-base bg-mustard text-white text-center transition-colors ease-linear duration-200 hover:bg-mustard-dark" href={route('admin.products')}>Back to Products</Link>
                        </div>
                        <div className="flex-1">
                            <Link className="w-full inline-block font-poppins p-3 shadow-sm text-base bg-zinc text-white text-center transition-colors ease-linear duration-200 hover:bg-zinc-dark" href={route('admin.products.variants.create', product.id)}>Add Product Variant</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
