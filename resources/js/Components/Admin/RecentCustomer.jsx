import { CustomerCard } from "../../Shared/Admin/CustomerCard";

export let RecentCustomers = () => {
    const customers = [
        {
            id: 1,
            firstname: "Ahmed",
            lastname: "Tahiri",
            email: "ahmed@example.com",
            avatar: null,
            datejoined: "2025-08-20",
            status: "Active",
        },
        {
            id: 2,
            firstname: "Sara",
            lastname: "Khan",
            email: "sara@example.com",
            avatar: "https://i.pravatar.cc/40?img=2",
            datejoined: "2025-08-21",
            status: "Block",
        },
    ];

    return (
        <div className="flex w-full bg-white shadow rounded flex-col gap-y-5 p-5">
            <h4 className="font-poppins text-lg font-medium text-semi-black">Recent Customers</h4>
            <div className="flex flex-row flex-wrap gap-y-3 items-center">
                <table className="min-w-full border-collapse bg-white md:overflow-x-auto overflow-x-scroll">
                    <thead className="bg-zinc text-white text-left text-sm font-medium font-poppins">
                        <tr>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark w-16">Avatar</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">First Name</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Last Name</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Email</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Date Joined</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark">Status</th>
                            <th className="px-3 py-2 border-x-1 border-zinc-dark text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-300">
                        {customers.map((c, idx) => (
                            <CustomerCard key={c.id} customer={c} index={idx} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}