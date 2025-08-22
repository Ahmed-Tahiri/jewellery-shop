import { Link } from "@inertiajs/react";

export let NavLink = ({ icon, title, path }) => {
    return (<li className="w-full">
        <Link href={path} className="flex flex-row justify-between items-center hover:scale-105 transition-all ease-linear duration-200">
            <p className="flex text-light-gray font-medium gap-x-3 items-center">
                {icon}
                <span className="">{title}</span>
            </p>
        </Link>
    </li>);
}