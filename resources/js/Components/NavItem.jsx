import { Link } from "@inertiajs/react";
export let NavItem = ({ open, to, label, icon: Icon }) => {

    return (
        <Link
            href={to}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-yellow-50 transition text-gray-700"
        >
            <Icon className="text-2xl text-yellow-600" />
            <span className={`truncate ${open ? "block" : "hidden"}`}>{label}</span>
        </Link>
    );

}