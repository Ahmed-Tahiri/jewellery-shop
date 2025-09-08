import { ProductPanelCard } from "../../Shared/Admin/ProductPanelCard";
import { SectionLink } from "../../Shared/Admin/SectionLink";

export let AllProducts = ({ products }) => {

    return (
        <div className="flex w-full bg-white shadow rounded flex-col gap-y-5 p-5">

            <div className={`w-full flex flex-row gap-x-5  items-center justify-between border-b-[1px] border-gray-300 pb-4`}>
                <h4 className={`font-poppins text-lg font-medium text-semi-black `}>Parent Categories</h4>
                <SectionLink path={'admin.categories.create'} title={'Add Category'} />
            </div>
            <div className="w-full flex flex-row gap-10 flex-wrap items-start justify-start">

                <div className="w-full flex flex-row flex-wrap gap-y-3 items-center overflow-x-auto">
                    <table className="min-w-full border-collapse bg-white md:overflow-x-auto overflow-x-scroll">
                        <thead className="bg-zinc text-white text-left text-sm font-medium font-poppins">
                            <tr>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark w-16">Id</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">Image</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">Name</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">SKU</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">Category</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">Sub Category</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">Added On</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark">Is Active</th>
                                <th className="px-3 py-2 border-x-1 border-zinc-dark text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-300 shadow">
                            {products.map((p, idx) => (
                                <ProductPanelCard key={`ProductCard${p.id}`} product={p} index={idx} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}