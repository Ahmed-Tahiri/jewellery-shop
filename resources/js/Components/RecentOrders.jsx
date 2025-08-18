import { Link } from "@inertiajs/react";
export let RecentOrders = () => {
    const recentOrders = [
        { id: 1, customer: "Sara Ahmed", total: "$420", status: "Shipped" },
        { id: 2, customer: "Bilal Khan", total: "$75", status: "Pending" },
        { id: 3, customer: "Ayesha Ali", total: "$220", status: "Delivered" },
    ];
    return <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500">
                        <th className="py-2 px-2">#</th>
                        <th className="py-2 px-2">Customer</th>
                        <th className="py-2 px-2">Total</th>
                        <th className="py-2 px-2">Status</th>
                        <th className="py-2 px-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map((o) => (
                        <tr key={o.id} className="border-t">
                            <td className="py-3 px-2">{o.id}</td>
                            <td className="py-3 px-2">{o.customer}</td>
                            <td className="py-3 px-2">{o.total}</td>
                            <td className="py-3 px-2">{o.status}</td>
                            <td className="py-3 px-2">
                                <Link href={`/${o.id}`} className="text-yellow-600 font-medium">
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}