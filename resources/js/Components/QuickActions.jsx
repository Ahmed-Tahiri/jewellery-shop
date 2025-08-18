import { Link } from "@inertiajs/react"

export let QuickActions = () => {
    return <div className="flex-none lg:w-80 bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex flex-col gap-3">
            <Link href="" className="px-4 py-2 rounded-md bg-yellow-600 text-white text-center">
                Add Product
            </Link>
            <Link href="" className="px-4 py-2 rounded-md border border-yellow-600 text-yellow-600 text-center">
                Add Category
            </Link>
            <Link href="" className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 text-center">
                View Orders
            </Link>
        </div>
    </div>
}