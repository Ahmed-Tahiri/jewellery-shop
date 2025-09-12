import { SectionLink } from "../../Shared/Admin/SectionLink"

export let ProductDiscounts = ({ discounts }) => {
    return <div className="flex w-full bg-white shadow rounded flex-col gap-y-5 p-5">

        <div className={`w-full flex flex-row gap-x-5  items-center justify-between border-b-[1px] border-gray-300 pb-4`}>
            <h4 className={`font-poppins text-lg font-medium text-semi-black `}>Product Discounts</h4>
            <SectionLink path={'admin.discounts.products.list'} title={'Add Discount on Product'} />
        </div>
        <div className="w-full flex flex-row gap-10 flex-wrap items-start justify-start">

            <div className="w-full flex flex-row flex-wrap gap-y-3 items-center overflow-x-auto">
                <table className="min-w-full border-collapse bg-white md:overflow-x-auto overflow-x-scroll">
                    <thead className="bg-zinc text-white text-left text-sm font-medium font-poppins">
                        <tr>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark w-16">Avatar</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">First name</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Last Name</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Email</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Date Joined</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Status</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-300 shadow">
                        {/* {customers.map((c, idx) => (
                                  <AdminPanelCustomerCard key={`customerCard${c.id}`} customer={c} index={idx} />
                              ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}